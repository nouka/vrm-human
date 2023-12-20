import './style.css'

import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
  HandLandmarker,
  HandLandmarkerResult,
  PoseLandmarker,
  PoseLandmarkerResult
} from '@mediapipe/tasks-vision'
import {
  VRM,
  VRMExpressionPresetName,
  VRMHumanBoneName,
  VRMLoaderPlugin
} from '@pixiv/three-vrm'
import { Face, Hand, Pose, Side } from 'kalidokit'
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
  const poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
      delegate: 'GPU'
    },
    runningMode: 'VIDEO',
    numPoses: 1
  })
  const handLandmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
      delegate: 'GPU'
    },
    runningMode: 'VIDEO',
    numHands: 2
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
  startButton.textContent = 'カメラ読み込み開始'
  startButton.style.position = 'absolute'
  startButton.style.top = '10px'
  startButton.style.left = '10px'

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
        startButton.style.display = 'none'

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
      const handLandmarkerResult = handLandmarker.detectForVideo(video, pref)
      update(
        faceLandmarkerResult,
        poseLandmarkerResult,
        handLandmarkerResult,
        vrm
      )
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
    hand: HandLandmarkerResult,
    vrm: VRM
  ): Promise<void> => {
    const faceRig = Face.solve(face.faceLandmarks[0], {
      runtime: 'mediapipe',
      video: video,
      smoothBlink: true,
      blinkSettings: [0.25, 0.75]
    })
    if (!faceRig) return

    const poseRig = Pose.solve(
      pose.worldLandmarks[0].map((landmark) => ({
        ...landmark,
        visibility: 1
      })),
      pose.landmarks[0],
      {
        runtime: 'mediapipe',
        video: video,
        enableLegs: true
      }
    )
    if (!poseRig) return

    const handRigs = hand.handedness.map((cat, index) => {
      return Hand.solve(hand.landmarks[index], cat[0].categoryName as Side)
    })
    const rightHandRig = handRigs.find((rig) => rig?.RightWrist !== undefined)
    const leftHandRig = handRigs.find((rig) => rig?.LeftWrist !== undefined)

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
    const headQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        faceRig.head.normalized.x,
        faceRig.head.normalized.y,
        faceRig.head.normalized.z
      )
    )

    // 背骨
    const spineQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(poseRig.Spine.x, poseRig.Spine.y, poseRig.Spine.z)
    )

    // 腕
    const leftUpperArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        poseRig.LeftUpperArm.x,
        poseRig.LeftUpperArm.y,
        poseRig.LeftUpperArm.z,
        poseRig.LeftUpperArm.rotationOrder
      )
    )
    const leftLowerArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        poseRig.LeftLowerArm.x,
        poseRig.LeftLowerArm.y,
        poseRig.LeftLowerArm.z,
        poseRig.LeftLowerArm.rotationOrder
      )
    )
    const rightUpperArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        poseRig.RightUpperArm.x,
        poseRig.RightUpperArm.y,
        poseRig.RightUpperArm.z,
        poseRig.RightUpperArm.rotationOrder
      )
    )
    const rightLowerArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        poseRig.RightLowerArm.x,
        poseRig.RightLowerArm.y,
        poseRig.RightLowerArm.z,
        poseRig.RightLowerArm.rotationOrder
      )
    )

    // 手
    const rightWristQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        poseRig.RightHand.x,
        poseRig.RightHand.y,
        poseRig.RightHand.z
      )
    )
    const rightLittleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightLittleDistal.x,
        rightHandRig?.RightLittleDistal.y,
        rightHandRig?.RightLittleDistal.z
      )
    )
    const rightLittleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          rightHandRig?.RightLittleIntermediate.x,
          rightHandRig?.RightLittleIntermediate.y,
          rightHandRig?.RightLittleIntermediate.z
        )
      )
    const rightLittleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightLittleProximal.x,
        rightHandRig?.RightLittleProximal.y,
        rightHandRig?.RightLittleProximal.z
      )
    )
    const rightRingDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightRingDistal.x,
        rightHandRig?.RightRingDistal.y,
        rightHandRig?.RightRingDistal.z
      )
    )
    const rightRingIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightRingIntermediate.x,
        rightHandRig?.RightRingIntermediate.y,
        rightHandRig?.RightRingIntermediate.z
      )
    )
    const rightRingProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightRingProximal.x,
        rightHandRig?.RightRingProximal.y,
        rightHandRig?.RightRingProximal.z
      )
    )
    const rightMiddleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightMiddleDistal.x,
        rightHandRig?.RightMiddleDistal.y,
        rightHandRig?.RightMiddleDistal.z
      )
    )
    const rightMiddleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          rightHandRig?.RightMiddleIntermediate.x,
          rightHandRig?.RightMiddleIntermediate.y,
          rightHandRig?.RightMiddleIntermediate.z
        )
      )
    const rightMiddleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightMiddleProximal.x,
        rightHandRig?.RightMiddleProximal.y,
        rightHandRig?.RightMiddleProximal.z
      )
    )
    const rightIndexDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightIndexDistal.x,
        rightHandRig?.RightIndexDistal.y,
        rightHandRig?.RightIndexDistal.z
      )
    )
    const rightIndexIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          rightHandRig?.RightIndexIntermediate.x,
          rightHandRig?.RightIndexIntermediate.y,
          rightHandRig?.RightIndexIntermediate.z
        )
      )
    const rightIndexProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightIndexProximal.x,
        rightHandRig?.RightIndexProximal.y,
        rightHandRig?.RightIndexProximal.z
      )
    )
    const rightThumbDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightThumbDistal.x,
        rightHandRig?.RightThumbDistal.y,
        rightHandRig?.RightThumbDistal.z
      )
    )
    const rightThumbIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          rightHandRig?.RightThumbIntermediate.x,
          rightHandRig?.RightThumbIntermediate.y,
          rightHandRig?.RightThumbIntermediate.z
        )
      )
    const rightThumbProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        rightHandRig?.RightThumbProximal.x,
        rightHandRig?.RightThumbProximal.y,
        rightHandRig?.RightThumbProximal.z
      )
    )
    const leftWristQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        poseRig.LeftHand.x,
        poseRig.LeftHand.y,
        poseRig.LeftHand.z
      )
    )
    const leftLittleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftLittleDistal.x,
        leftHandRig?.LeftLittleDistal.y,
        leftHandRig?.LeftLittleDistal.z
      )
    )
    const leftLittleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          leftHandRig?.LeftLittleIntermediate.x,
          leftHandRig?.LeftLittleIntermediate.y,
          leftHandRig?.LeftLittleIntermediate.z
        )
      )
    const leftLittleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftLittleProximal.x,
        leftHandRig?.LeftLittleProximal.y,
        leftHandRig?.LeftLittleProximal.z
      )
    )
    const leftRingDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftRingDistal.x,
        leftHandRig?.LeftRingDistal.y,
        leftHandRig?.LeftRingDistal.z
      )
    )
    const leftRingIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftRingIntermediate.x,
        leftHandRig?.LeftRingIntermediate.y,
        leftHandRig?.LeftRingIntermediate.z
      )
    )
    const leftRingProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftRingProximal.x,
        leftHandRig?.LeftRingProximal.y,
        leftHandRig?.LeftRingProximal.z
      )
    )
    const leftMiddleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftMiddleDistal.x,
        leftHandRig?.LeftMiddleDistal.y,
        leftHandRig?.LeftMiddleDistal.z
      )
    )
    const leftMiddleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          leftHandRig?.LeftMiddleIntermediate.x,
          leftHandRig?.LeftMiddleIntermediate.y,
          leftHandRig?.LeftMiddleIntermediate.z
        )
      )
    const leftMiddleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftMiddleProximal.x,
        leftHandRig?.LeftMiddleProximal.y,
        leftHandRig?.LeftMiddleProximal.z
      )
    )
    const leftIndexDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftIndexDistal.x,
        leftHandRig?.LeftIndexDistal.y,
        leftHandRig?.LeftIndexDistal.z
      )
    )
    const leftIndexIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftIndexIntermediate.x,
        leftHandRig?.LeftIndexIntermediate.y,
        leftHandRig?.LeftIndexIntermediate.z
      )
    )
    const leftIndexProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftIndexProximal.x,
        leftHandRig?.LeftIndexProximal.y,
        leftHandRig?.LeftIndexProximal.z
      )
    )
    const leftThumbDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftThumbDistal.x,
        leftHandRig?.LeftThumbDistal.y,
        leftHandRig?.LeftThumbDistal.z
      )
    )
    const leftThumbIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftThumbIntermediate.x,
        leftHandRig?.LeftThumbIntermediate.y,
        leftHandRig?.LeftThumbIntermediate.z
      )
    )
    const leftThumbProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        leftHandRig?.LeftThumbProximal.x,
        leftHandRig?.LeftThumbProximal.y,
        leftHandRig?.LeftThumbProximal.z
      )
    )
    vrm.humanoid.setNormalizedPose({
      [VRMHumanBoneName.Head]: {
        rotation: [
          headQuaternion.x,
          headQuaternion.y,
          headQuaternion.z,
          headQuaternion.w
        ]
      },
      [VRMHumanBoneName.Spine]: {
        rotation: [
          spineQuaternion.x,
          spineQuaternion.y,
          spineQuaternion.z,
          spineQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftUpperArm]: {
        rotation: [
          leftUpperArmQuaternion.x,
          leftUpperArmQuaternion.y,
          leftUpperArmQuaternion.z,
          leftUpperArmQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftLowerArm]: {
        rotation: [
          leftLowerArmQuaternion.x,
          leftLowerArmQuaternion.y,
          leftLowerArmQuaternion.z,
          leftLowerArmQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightUpperArm]: {
        rotation: [
          rightUpperArmQuaternion.x,
          rightUpperArmQuaternion.y,
          rightUpperArmQuaternion.z,
          rightUpperArmQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightLowerArm]: {
        rotation: [
          rightLowerArmQuaternion.x,
          rightLowerArmQuaternion.y,
          rightLowerArmQuaternion.z,
          rightLowerArmQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightHand]: {
        rotation: [
          rightWristQuaternion.x,
          rightWristQuaternion.y,
          rightWristQuaternion.z,
          rightWristQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightLittleDistal]: {
        rotation: [
          rightLittleDistalQuaternion.x,
          rightLittleDistalQuaternion.y,
          rightLittleDistalQuaternion.z,
          rightLittleDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightLittleIntermediate]: {
        rotation: [
          rightLittleIntermediateQuaternion.x,
          rightLittleIntermediateQuaternion.y,
          rightLittleIntermediateQuaternion.z,
          rightLittleIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightLittleProximal]: {
        rotation: [
          rightLittleProximalQuaternion.x,
          rightLittleProximalQuaternion.y,
          rightLittleProximalQuaternion.z,
          rightLittleProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightRingDistal]: {
        rotation: [
          rightRingDistalQuaternion.x,
          rightRingDistalQuaternion.y,
          rightRingDistalQuaternion.z,
          rightRingDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightRingIntermediate]: {
        rotation: [
          rightRingIntermediateQuaternion.x,
          rightRingIntermediateQuaternion.y,
          rightRingIntermediateQuaternion.z,
          rightRingIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightRingProximal]: {
        rotation: [
          rightRingProximalQuaternion.x,
          rightRingProximalQuaternion.y,
          rightRingProximalQuaternion.z,
          rightRingProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightMiddleDistal]: {
        rotation: [
          rightMiddleDistalQuaternion.x,
          rightMiddleDistalQuaternion.y,
          rightMiddleDistalQuaternion.z,
          rightMiddleDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightMiddleIntermediate]: {
        rotation: [
          rightMiddleIntermediateQuaternion.x,
          rightMiddleIntermediateQuaternion.y,
          rightMiddleIntermediateQuaternion.z,
          rightMiddleIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightMiddleProximal]: {
        rotation: [
          rightMiddleProximalQuaternion.x,
          rightMiddleProximalQuaternion.y,
          rightMiddleProximalQuaternion.z,
          rightMiddleProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightIndexDistal]: {
        rotation: [
          rightIndexDistalQuaternion.x,
          rightIndexDistalQuaternion.y,
          rightIndexDistalQuaternion.z,
          rightIndexDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightIndexIntermediate]: {
        rotation: [
          rightIndexIntermediateQuaternion.x,
          rightIndexIntermediateQuaternion.y,
          rightIndexIntermediateQuaternion.z,
          rightIndexIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightIndexProximal]: {
        rotation: [
          rightIndexProximalQuaternion.x,
          rightIndexProximalQuaternion.y,
          rightIndexProximalQuaternion.z,
          rightIndexProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightThumbDistal]: {
        rotation: [
          rightThumbDistalQuaternion.x,
          rightThumbDistalQuaternion.y,
          rightThumbDistalQuaternion.z,
          rightThumbDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightThumbMetacarpal]: {
        rotation: [
          rightThumbIntermediateQuaternion.x,
          rightThumbIntermediateQuaternion.y,
          rightThumbIntermediateQuaternion.z,
          rightThumbIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.RightThumbProximal]: {
        rotation: [
          rightThumbProximalQuaternion.x,
          rightThumbProximalQuaternion.y,
          rightThumbProximalQuaternion.z,
          rightThumbProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftHand]: {
        rotation: [
          leftWristQuaternion.x,
          leftWristQuaternion.y,
          leftWristQuaternion.z,
          leftWristQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftLittleDistal]: {
        rotation: [
          leftLittleDistalQuaternion.x,
          leftLittleDistalQuaternion.y,
          leftLittleDistalQuaternion.z,
          leftLittleDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftLittleIntermediate]: {
        rotation: [
          leftLittleIntermediateQuaternion.x,
          leftLittleIntermediateQuaternion.y,
          leftLittleIntermediateQuaternion.z,
          leftLittleIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftLittleProximal]: {
        rotation: [
          leftLittleProximalQuaternion.x,
          leftLittleProximalQuaternion.y,
          leftLittleProximalQuaternion.z,
          leftLittleProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftRingDistal]: {
        rotation: [
          leftRingDistalQuaternion.x,
          leftRingDistalQuaternion.y,
          leftRingDistalQuaternion.z,
          leftRingDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftRingIntermediate]: {
        rotation: [
          leftRingIntermediateQuaternion.x,
          leftRingIntermediateQuaternion.y,
          leftRingIntermediateQuaternion.z,
          leftRingIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftRingProximal]: {
        rotation: [
          leftRingProximalQuaternion.x,
          leftRingProximalQuaternion.y,
          leftRingProximalQuaternion.z,
          leftRingProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftMiddleDistal]: {
        rotation: [
          leftMiddleDistalQuaternion.x,
          leftMiddleDistalQuaternion.y,
          leftMiddleDistalQuaternion.z,
          leftMiddleDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftMiddleIntermediate]: {
        rotation: [
          leftMiddleIntermediateQuaternion.x,
          leftMiddleIntermediateQuaternion.y,
          leftMiddleIntermediateQuaternion.z,
          leftMiddleIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftMiddleProximal]: {
        rotation: [
          leftMiddleProximalQuaternion.x,
          leftMiddleProximalQuaternion.y,
          leftMiddleProximalQuaternion.z,
          leftMiddleProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftIndexDistal]: {
        rotation: [
          leftIndexDistalQuaternion.x,
          leftIndexDistalQuaternion.y,
          leftIndexDistalQuaternion.z,
          leftIndexDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftIndexIntermediate]: {
        rotation: [
          leftIndexIntermediateQuaternion.x,
          leftIndexIntermediateQuaternion.y,
          leftIndexIntermediateQuaternion.z,
          leftIndexIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftIndexProximal]: {
        rotation: [
          leftIndexProximalQuaternion.x,
          leftIndexProximalQuaternion.y,
          leftIndexProximalQuaternion.z,
          leftIndexProximalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftThumbDistal]: {
        rotation: [
          leftThumbDistalQuaternion.x,
          leftThumbDistalQuaternion.y,
          leftThumbDistalQuaternion.z,
          leftThumbDistalQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftThumbMetacarpal]: {
        rotation: [
          leftThumbIntermediateQuaternion.x,
          leftThumbIntermediateQuaternion.y,
          leftThumbIntermediateQuaternion.z,
          leftThumbIntermediateQuaternion.w
        ]
      },
      [VRMHumanBoneName.LeftThumbProximal]: {
        rotation: [
          leftThumbProximalQuaternion.x,
          leftThumbProximalQuaternion.y,
          leftThumbProximalQuaternion.z,
          leftThumbProximalQuaternion.w
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
