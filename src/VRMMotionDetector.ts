import {
  FaceLandmarkerResult,
  HandLandmarkerResult,
  PoseLandmarkerResult
} from '@mediapipe/tasks-vision'
import {
  VRMExpressionPresetName,
  VRMHumanBoneName,
  VRMPose
} from '@pixiv/three-vrm'
import { Face, Hand, Pose, Side, TFace, THand, TPose } from 'kalidokit'
import * as THREE from 'three'

export default class VRMMotionDetector {
  private faceLandmarkerResult: FaceLandmarkerResult
  private faceRig: TFace | undefined
  private poseRig: TPose | undefined
  private rightHandRig: THand<'Right'> | undefined
  private leftHandRig: THand<'Left'> | undefined

  constructor(
    video: HTMLVideoElement,
    faceLandmarkerResult: FaceLandmarkerResult,
    poseLandmarkerResult: PoseLandmarkerResult,
    handLandmarkerResult: HandLandmarkerResult
  ) {
    this.faceLandmarkerResult = faceLandmarkerResult
    this.faceRig = this.getFaceRig(faceLandmarkerResult, video)
    this.poseRig = this.getPoseRig(poseLandmarkerResult, video)
    const handRigs = this.getHandRigs(handLandmarkerResult)
    this.rightHandRig = handRigs.find((rig) => rig?.RightWrist !== undefined)
    this.leftHandRig = handRigs.find((rig) => rig?.LeftWrist !== undefined)
  }

  private getScore(result: FaceLandmarkerResult, name: string): number {
    return (
      result.faceBlendshapes[0]?.categories.filter(
        (category) => category.categoryName === name
      )[0].score ?? 0
    )
  }

  private getFaceRig(result: FaceLandmarkerResult, video: HTMLVideoElement) {
    if (!result.faceLandmarks[0]) return
    return Face.solve(result.faceLandmarks[0], {
      runtime: 'mediapipe',
      video: video,
      smoothBlink: true,
      blinkSettings: [0.25, 0.75]
    })
  }

  private getPoseRig(result: PoseLandmarkerResult, video: HTMLVideoElement) {
    if (!result.worldLandmarks[0] || !result.landmarks[0]) return
    return Pose.solve(
      result.worldLandmarks[0].map((landmark) => ({
        ...landmark,
        visibility: 1
      })),
      result.landmarks[0],
      {
        runtime: 'mediapipe',
        video: video,
        enableLegs: true
      }
    )
  }

  private getHandRigs(result: HandLandmarkerResult) {
    return result.handedness.map((cat, index) => {
      return Hand.solve(result.landmarks[index], cat[0].categoryName as Side)
    })
  }

  public getExpressions() {
    if (!this.faceRig) return []
    return [
      {
        name: VRMExpressionPresetName.BlinkRight,
        weight: 1 - this.faceRig.eye.r
      },
      {
        name: VRMExpressionPresetName.BlinkLeft,
        weight: 1 - this.faceRig.eye.l
      },
      { name: VRMExpressionPresetName.Aa, weight: this.faceRig.mouth.shape.A },
      { name: VRMExpressionPresetName.Ih, weight: this.faceRig.mouth.shape.I },
      { name: VRMExpressionPresetName.Ou, weight: this.faceRig.mouth.shape.U },
      { name: VRMExpressionPresetName.Ee, weight: this.faceRig.mouth.shape.E },
      { name: VRMExpressionPresetName.Ou, weight: this.faceRig.mouth.shape.O }
    ]
  }

  public getLookAt() {
    const eyeLookInRight = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookInRight'
    )
    const eyeLookInLeft = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookInLeft'
    )
    const eyeLookOutRight = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookOutRight'
    )
    const eyeLookOutLeft = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookOutLeft'
    )
    const eyeLookUpRight = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookUpRight'
    )
    const eyeLookUpLeft = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookUpLeft'
    )
    const eyeLookDownRight = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookDownRight'
    )
    const eyeLookDownLeft = this.getScore(
      this.faceLandmarkerResult,
      'eyeLookDownLeft'
    )

    const threshold = 50
    const eyeLeft = -threshold * ((eyeLookInRight + eyeLookOutLeft) / 2)
    const eyeRight = threshold * ((eyeLookOutRight + eyeLookInLeft) / 2)

    const eyeTop = -threshold * ((eyeLookUpRight + eyeLookUpLeft) / 2)
    const eyeBottom = threshold * ((eyeLookDownRight + eyeLookDownLeft) / 2)

    return { yaw: eyeLeft + eyeRight, pitch: eyeTop + eyeBottom }
  }

  public getHumanoid(): VRMPose {
    if (!this.faceRig) return {}
    if (!this.poseRig) return {}

    // 首
    const headQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.faceRig.head.normalized.x,
        this.faceRig.head.normalized.y,
        this.faceRig.head.normalized.z
      )
    )

    // 背骨
    const spineQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.Spine.x,
        this.poseRig.Spine.y,
        this.poseRig.Spine.z
      )
    )

    // 腕
    const leftUpperArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.LeftUpperArm.x,
        this.poseRig.LeftUpperArm.y,
        this.poseRig.LeftUpperArm.z,
        this.poseRig.LeftUpperArm.rotationOrder
      )
    )
    const leftLowerArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.LeftLowerArm.x,
        this.poseRig.LeftLowerArm.y,
        this.poseRig.LeftLowerArm.z,
        this.poseRig.LeftLowerArm.rotationOrder
      )
    )
    const rightUpperArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.RightUpperArm.x,
        this.poseRig.RightUpperArm.y,
        this.poseRig.RightUpperArm.z,
        this.poseRig.RightUpperArm.rotationOrder
      )
    )
    const rightLowerArmQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.RightLowerArm.x,
        this.poseRig.RightLowerArm.y,
        this.poseRig.RightLowerArm.z,
        this.poseRig.RightLowerArm.rotationOrder
      )
    )

    // 手
    const rightWristQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.RightHand.x,
        this.poseRig.RightHand.y,
        this.poseRig.RightHand.z
      )
    )
    const rightLittleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightLittleDistal.x,
        this.rightHandRig?.RightLittleDistal.y,
        this.rightHandRig?.RightLittleDistal.z
      )
    )
    const rightLittleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.rightHandRig?.RightLittleIntermediate.x,
          this.rightHandRig?.RightLittleIntermediate.y,
          this.rightHandRig?.RightLittleIntermediate.z
        )
      )
    const rightLittleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightLittleProximal.x,
        this.rightHandRig?.RightLittleProximal.y,
        this.rightHandRig?.RightLittleProximal.z
      )
    )
    const rightRingDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightRingDistal.x,
        this.rightHandRig?.RightRingDistal.y,
        this.rightHandRig?.RightRingDistal.z
      )
    )
    const rightRingIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightRingIntermediate.x,
        this.rightHandRig?.RightRingIntermediate.y,
        this.rightHandRig?.RightRingIntermediate.z
      )
    )
    const rightRingProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightRingProximal.x,
        this.rightHandRig?.RightRingProximal.y,
        this.rightHandRig?.RightRingProximal.z
      )
    )
    const rightMiddleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightMiddleDistal.x,
        this.rightHandRig?.RightMiddleDistal.y,
        this.rightHandRig?.RightMiddleDistal.z
      )
    )
    const rightMiddleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.rightHandRig?.RightMiddleIntermediate.x,
          this.rightHandRig?.RightMiddleIntermediate.y,
          this.rightHandRig?.RightMiddleIntermediate.z
        )
      )
    const rightMiddleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightMiddleProximal.x,
        this.rightHandRig?.RightMiddleProximal.y,
        this.rightHandRig?.RightMiddleProximal.z
      )
    )
    const rightIndexDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightIndexDistal.x,
        this.rightHandRig?.RightIndexDistal.y,
        this.rightHandRig?.RightIndexDistal.z
      )
    )
    const rightIndexIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.rightHandRig?.RightIndexIntermediate.x,
          this.rightHandRig?.RightIndexIntermediate.y,
          this.rightHandRig?.RightIndexIntermediate.z
        )
      )
    const rightIndexProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightIndexProximal.x,
        this.rightHandRig?.RightIndexProximal.y,
        this.rightHandRig?.RightIndexProximal.z
      )
    )
    const rightThumbDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightThumbDistal.x,
        this.rightHandRig?.RightThumbDistal.y,
        this.rightHandRig?.RightThumbDistal.z
      )
    )
    const rightThumbIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.rightHandRig?.RightThumbIntermediate.x,
          this.rightHandRig?.RightThumbIntermediate.y,
          this.rightHandRig?.RightThumbIntermediate.z
        )
      )
    const rightThumbProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.rightHandRig?.RightThumbProximal.x,
        this.rightHandRig?.RightThumbProximal.y,
        this.rightHandRig?.RightThumbProximal.z
      )
    )
    const leftWristQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.poseRig.LeftHand.x,
        this.poseRig.LeftHand.y,
        this.poseRig.LeftHand.z
      )
    )
    const leftLittleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftLittleDistal.x,
        this.leftHandRig?.LeftLittleDistal.y,
        this.leftHandRig?.LeftLittleDistal.z
      )
    )
    const leftLittleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.leftHandRig?.LeftLittleIntermediate.x,
          this.leftHandRig?.LeftLittleIntermediate.y,
          this.leftHandRig?.LeftLittleIntermediate.z
        )
      )
    const leftLittleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftLittleProximal.x,
        this.leftHandRig?.LeftLittleProximal.y,
        this.leftHandRig?.LeftLittleProximal.z
      )
    )
    const leftRingDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftRingDistal.x,
        this.leftHandRig?.LeftRingDistal.y,
        this.leftHandRig?.LeftRingDistal.z
      )
    )
    const leftRingIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftRingIntermediate.x,
        this.leftHandRig?.LeftRingIntermediate.y,
        this.leftHandRig?.LeftRingIntermediate.z
      )
    )
    const leftRingProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftRingProximal.x,
        this.leftHandRig?.LeftRingProximal.y,
        this.leftHandRig?.LeftRingProximal.z
      )
    )
    const leftMiddleDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftMiddleDistal.x,
        this.leftHandRig?.LeftMiddleDistal.y,
        this.leftHandRig?.LeftMiddleDistal.z
      )
    )
    const leftMiddleIntermediateQuaternion =
      new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.leftHandRig?.LeftMiddleIntermediate.x,
          this.leftHandRig?.LeftMiddleIntermediate.y,
          this.leftHandRig?.LeftMiddleIntermediate.z
        )
      )
    const leftMiddleProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftMiddleProximal.x,
        this.leftHandRig?.LeftMiddleProximal.y,
        this.leftHandRig?.LeftMiddleProximal.z
      )
    )
    const leftIndexDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftIndexDistal.x,
        this.leftHandRig?.LeftIndexDistal.y,
        this.leftHandRig?.LeftIndexDistal.z
      )
    )
    const leftIndexIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftIndexIntermediate.x,
        this.leftHandRig?.LeftIndexIntermediate.y,
        this.leftHandRig?.LeftIndexIntermediate.z
      )
    )
    const leftIndexProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftIndexProximal.x,
        this.leftHandRig?.LeftIndexProximal.y,
        this.leftHandRig?.LeftIndexProximal.z
      )
    )
    const leftThumbDistalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftThumbDistal.x,
        this.leftHandRig?.LeftThumbDistal.y,
        this.leftHandRig?.LeftThumbDistal.z
      )
    )
    const leftThumbIntermediateQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftThumbIntermediate.x,
        this.leftHandRig?.LeftThumbIntermediate.y,
        this.leftHandRig?.LeftThumbIntermediate.z
      )
    )
    const leftThumbProximalQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        this.leftHandRig?.LeftThumbProximal.x,
        this.leftHandRig?.LeftThumbProximal.y,
        this.leftHandRig?.LeftThumbProximal.z
      )
    )

    return {
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
    }
  }
}
