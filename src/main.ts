import './style.css'

import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver
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

  // シーン
  const scene = new THREE.Scene()

  // カメラの生成
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1.3, -2)
  camera.rotation.set(0, Math.PI, 0)

  // レンダラーの生成
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x7fbfff, 1.0)

  // カメラコントーロールの設定
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0.85, 0)
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

  // canvasエレメントを取得
  const canvas = document.createElement('canvas')
  const context2D = canvas.getContext('2d')!
  // videoエレメントを作成
  const video = document.createElement('video')

  // Domに追加
  const container = <HTMLDivElement>document.getElementById('container')
  container.style.position = 'relative'
  container.appendChild(renderer.domElement)
  container.appendChild(canvas)

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
      console.log(vrm)
    },

    // called while loading is progressing
    (progress) =>
      console.log(
        'Loading model...',
        100.0 * (progress.loaded / progress.total),
        '%'
      ),

    // called when loading has errors
    (error) => console.error(error)
  )

  // カメラ映像をvideoにアタッチ
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
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.style.position = 'absolute'
      canvas.style.bottom = '0'
      canvas.style.right = '0'
      canvas.style.scale = '0.5'

      // ビデオ映像のロードが完了したらループ処理スタート
      await tick(0)
    }
  } catch (e) {
    console.error(e)
    return
  }

  // 最終更新時間
  let lastVideoTime = -1
  const clock = new THREE.Clock()
  // ループ処理
  const tick = async (pref: number) => {
    if (video.currentTime !== lastVideoTime) {
      const faceLandmarkerResult = faceLandmarker.detectForVideo(
        video,
        Date.now()
      )
      update(faceLandmarkerResult, vrm)
      lastVideoTime = video.currentTime
    }

    draw(context2D, pref)
    // 3Dレンダラー
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
  }

  /**
   * アップデート処理
   */
  const update = async (
    result: FaceLandmarkerResult,
    vrm: VRM
  ): Promise<void> => {
    console.log(result)

    // 瞬き
    const eyeBlinkLeft = result.faceBlendshapes[0].categories.filter(
      (category) => category.categoryName === 'eyeBlinkLeft'
    )[0].score
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.BlinkLeft,
      eyeBlinkLeft
    )

    const eyeBlinkRight = result.faceBlendshapes[0].categories.filter(
      (category) => category.categoryName === 'eyeBlinkRight'
    )[0].score
    vrm.expressionManager?.setValue(
      VRMExpressionPresetName.BlinkRight,
      eyeBlinkRight
    )

    // 口``
    const jawOpen = result.faceBlendshapes[0].categories.filter(
      (category) => category.categoryName === 'jawOpen'
    )[0].score

    vrm.expressionManager?.setValue(VRMExpressionPresetName.Aa, jawOpen)

    const mouthPucker = result.faceBlendshapes[0].categories.filter(
      (category) => category.categoryName === 'mouthPucker'
    )[0].score

    vrm.expressionManager?.setValue(VRMExpressionPresetName.Ou, mouthPucker)

    vrm.expressionManager?.update()
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
  const draw = (
    context2D: CanvasRenderingContext2D,
    timestamp: number
  ): void => {
    // 画面をクリア
    context2D.clearRect(0, 0, canvas.width, canvas.height)

    // Videoを表示
    drawVideo(context2D)
  }
}

window.onload = main
