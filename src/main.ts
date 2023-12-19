import './style.css'

import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
  PoseLandmarker,
  PoseLandmarkerResult
} from '@mediapipe/tasks-vision'
import {
  VRM,
  VRMExpressionPresetName,
  VRMHumanBoneName,
  VRMLoaderPlugin
} from '@pixiv/three-vrm'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { Face } from 'kalidokit'

async function main() {
  // モデルをロード
  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
  )
  const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
      delegate: 'GPU'
    },
    outputFaceBlendshapes: true,
    runningMode: 'VIDEO',
    numFaces: 1
  })
  const poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
      delegate: 'GPU'
    },
    runningMode: 'VIDEO',
    numPoses: 1
  })

  // シーン
  const scene = new THREE.Scene()

  // カメラの生成
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1.45, -0.8)
  camera.rotation.set(0, Math.PI, 0)

  // レンダラーの生成
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x7fbfff, 1.0)

  // カメラコントーロールの設定
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 1.3, 0)
  controls.screenSpacePanning = true
  controls.update()

  // ライトの生成
  const light = new THREE.DirectionalLight(0xffffff)
  light.position.set(-1, 1, -1).normalize()
  scene.add(light)

  // グリッドを表示
  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)
  gridHelper.visible = true

  // ローダ
  const loader = new GLTFLoader()

  // Install GLTFLoader plugin
  loader.register((parser) => {
    return new VRMLoaderPlugin(parser)
  })

  // canvasエレメントを作成
  const canvas = document.createElement('canvas')
  const context2D = canvas.getContext('2d')!
  // videoエレメントを作成
  const video = document.createElement('video')
  // startボタンを作成
  const startButton = document.createElement('button')
  startButton.textContent = '開始'
  startButton.style.position = 'absolute'
  startButton.style.top = '0'
  startButton.style.left = '0'

  // Domに追加
  const container = <HTMLDivElement>document.getElementById('container')
  container.style.width = `${window.innerWidth}px`
  container.style.height = `${window.innerHeight}px`
  container.style.position = 'relative'
  container.appendChild(renderer.domElement)
  container.appendChild(canvas)
  container.appendChild(startButton)

  let vrm: VRM

  loader.load(
    // URL of the VRM you want to load
    './models/test.vrm',

    // called when the resource is loaded
    (gltf) => {
      // retrieve a VRM instance from gltf
      vrm = gltf.userData.vrm

      // add the loaded vrm to the scene
      scene.add(vrm.scene)

      // deal with vrm features
      console.debug(vrm)

      // initPose
      const q = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 0, 1),
        Math.PI / 2.3
      )
      vrm.humanoid.setNormalizedPose({
        [VRMHumanBoneName.LeftUpperArm]: {
          rotation: [q.x, q.y, q.z, q.w]
        },
        [VRMHumanBoneName.RightUpperArm]: {
          rotation: [q.x, q.y, q.z, -q.w]
        }
      })
      vrm.humanoid.update()
    },

    // called while loading is progressing
    (progress) =>
      console.info(
        'Loading model...',
        100.0 * (progress.loaded / progress.total),
        '%'
      ),

    // called when loading has errors
    (error) => console.error(error)
  )

  // カメラ映像をvideoにアタッチ
  startButton.onclick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user'
        }
      })
      video.srcObject = stream
      video.onloadedmetadata = async () => {
        // ビデオを再生
        video.play()

        // canvasサイズ調整
        const widthRetio = window.innerWidth <= 640 ? 2 : 4
        canvas.width = video.videoWidth / widthRetio
        canvas.height = (video.videoHeight / video.videoWidth) * canvas.width
        canvas.style.position = 'absolute'
        canvas.style.bottom = '0'
        canvas.style.right = '0'

        // ビデオ映像のロードが完了したらループ処理スタート
        await tick(0)
      }
    } catch (e) {
      console.error(e)
      return
    }
  }

  // 最終更新時間
  let lastVideoTime = -1
  const clock = new THREE.Clock()
  // ループ処理
  const tick = async (pref: number) => {
    if (video.currentTime !== lastVideoTime) {
      const faceLandmarkerResult = faceLandmarker.detectForVideo(video, pref)
      const poseLandmarkerResult = poseLandmarker.detectForVideo(video, pref)
      update(faceLandmarkerResult, poseLandmarkerResult, vrm)
      lastVideoTime = video.currentTime
    }

    draw(context2D)
    // 3Dレンダラー
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
  }

  const getScore = (result: FaceLandmarkerResult, name: string) => {
    return result.faceBlendshapes[0].categories.filter(
      (category) => category.categoryName === name
    )[0].score
  }

  /**
   * アップデート処理
   */
  const update = async (
    face: FaceLandmarkerResult,
    pose: PoseLandmarkerResult,
    vrm: VRM
  ): Promise<void> => {
    console.log(pose)
    console.log(face)

    const faceRig = Face.solve(face.faceLandmarks[0], {
      runtime: 'mediapipe',
      video: video,
      imageSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
    console.log(faceRig)
    if (!faceRig) return

    // const poseRig = Pose.solve(pose.landmarks[0], {
    //   runtime: 'mediapipe',
    //   video: video,
    //   imageSize: {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   }
    // })
    // console.log(poseRig)

    // 瞬き
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.BlinkRight,
      1 - faceRig.eye.r
    )
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.BlinkLeft,
      1 - faceRig.eye.l
    )

    // 口
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.Aa,
      faceRig.mouth.shape.A
    )
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.Ih,
      faceRig.mouth.shape.I
    )
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.Ou,
      faceRig.mouth.shape.U
    )
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.Ee,
      faceRig.mouth.shape.E
    )
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.Ou,
      faceRig.mouth.shape.O
    )

    vrm.expressionManager?.update()

    // 目の動き
    const eyeLookInRight = getScore(face, 'eyeLookInRight')
    const eyeLookInLeft = getScore(face, 'eyeLookInLeft')
    const eyeLookOutRight = getScore(face, 'eyeLookOutRight')
    const eyeLookOutLeft = getScore(face, 'eyeLookOutLeft')
    const eyeLookUpRight = getScore(face, 'eyeLookUpRight')
    const eyeLookUpLeft = getScore(face, 'eyeLookUpLeft')
    const eyeLookDownRight = getScore(face, 'eyeLookDownRight')
    const eyeLookDownLeft = getScore(face, 'eyeLookDownLeft')

    const horizontal = 50
    const eyeLeft = -horizontal * ((eyeLookInRight + eyeLookOutLeft) / 2)
    const eyeRight = horizontal * ((eyeLookOutRight + eyeLookInLeft) / 2)

    const vartical = 50
    const eyeTop = -vartical * ((eyeLookUpRight + eyeLookUpLeft) / 2)
    const eyeBottom = vartical * ((eyeLookDownRight + eyeLookDownLeft) / 2)

    if (vrm.lookAt) {
      vrm.lookAt.yaw = eyeLeft + eyeRight
      vrm.lookAt.pitch = eyeTop + eyeBottom
      vrm.lookAt.update(clock.getDelta())
    }

    // 首
    const headQuaternion = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(
        faceRig.head.normalized.x,
        faceRig.head.normalized.y,
        faceRig.head.normalized.z
      ),
      Math.PI / 2
    )
    vrm.humanoid.setNormalizedPose({
      [VRMHumanBoneName.Head]: {
        rotation: [
          headQuaternion.x,
          headQuaternion.y,
          headQuaternion.z,
          headQuaternion.w
        ]
      }
    })
    vrm.humanoid.update()
  }

  /**
   * Videoを描画
   *
   * @param context2D
   */
  const drawVideo = (context2D: CanvasRenderingContext2D) => {
    context2D.save()
    context2D.scale(-1, 1)
    const w = canvas.width
    const h = canvas.height
    const dx = -canvas.width + w
    const dy = canvas.height - h
    const dw = -w
    const dh = h
    context2D.drawImage(video, dx, dy, dw, dh)
    context2D.restore()
  }

  /**
   * 描画処理
   */
  const draw = (context2D: CanvasRenderingContext2D): void => {
    // 画面をクリア
    context2D.clearRect(0, 0, canvas.width, canvas.height)

    // Videoを表示
    drawVideo(context2D)
  }
}

window.onload = main
