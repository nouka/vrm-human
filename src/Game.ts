import {
  FaceLandmarker,
  HandLandmarker,
  PoseLandmarker
} from '@mediapipe/tasks-vision'
import { VRM } from '@pixiv/three-vrm'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import MediaPipe from './MediaPipe'
import VRMLoader from './VRMLoader'
import VRMMotionDetector from './VRMMotionDetector'

export default class Game {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private vrm: VRM | undefined
  private clock: THREE.Clock
  private faceLandmarker: FaceLandmarker | undefined
  private poseLandmarker: PoseLandmarker | undefined
  private handLandmarker: HandLandmarker | undefined

  constructor() {
    // シーン
    this.scene = new THREE.Scene()

    // カメラの生成
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.set(0, 1.45, -0.8)
    this.camera.rotation.set(0, Math.PI, 0)

    // レンダラーの生成
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0x7fbfff, 1.0)

    // カメラコントーロールの設定
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.target.set(0, 1.3, 0)
    controls.screenSpacePanning = true
    controls.update()

    // ライトの生成
    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(-1, 1, -1).normalize()
    this.scene.add(light)

    // グリッドを表示
    const gridHelper = new THREE.GridHelper(10, 10)
    this.scene.add(gridHelper)
    gridHelper.visible = true

    this.clock = new THREE.Clock()
  }

  public static async build() {
    const Self = new Game()

    const loader = new VRMLoader()
    Self.vrm = await loader.load('./models/test.vrm')
    Self.scene.add(Self.vrm.scene)

    const mediapipe = await MediaPipe.build()
    Self.faceLandmarker = await mediapipe.getFaceLandmarker()
    Self.poseLandmarker = await mediapipe.getPoseLandmarker()
    Self.handLandmarker = await mediapipe.getHandLandmarker()

    return Self
  }

  public async update(video: HTMLVideoElement, pref: number) {
    if (
      !this.faceLandmarker ||
      !this.poseLandmarker ||
      !this.handLandmarker ||
      !this.vrm
    )
      return

    const detector = new VRMMotionDetector(
      video,
      this.faceLandmarker.detectForVideo(video, pref),
      this.poseLandmarker.detectForVideo(video, pref),
      this.handLandmarker.detectForVideo(video, pref)
    )

    detector.getExpressions().forEach((expression) => {
      this.vrm?.expressionManager?.setValue(expression.name, expression.weight)
    })
    this.vrm.expressionManager?.update()

    if (this.vrm.lookAt) {
      const { yaw, pitch } = detector.getLookAt()

      this.vrm.lookAt.yaw = yaw
      this.vrm.lookAt.pitch = pitch
      this.vrm.lookAt.update(this.clock.getDelta())
    }

    this.vrm.humanoid.setNormalizedPose(detector.getHumanoid())
    this.vrm.humanoid.update()
  }

  public render() {
    this.renderer.render(this.scene, this.camera)
  }

  public getDomElement() {
    return this.renderer.domElement
  }
}
