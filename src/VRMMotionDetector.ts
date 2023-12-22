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
import CalcEye from './CalcEye'
import CalcHumanoid from './CalcHumanoid'

export default class VRMMotionDetector {
  private faceLandmarkerResult: FaceLandmarkerResult
  private faceRig: TFace | undefined
  private poseRig: TPose | undefined
  private rightHandRig: THand<'Right'> | undefined
  private leftHandRig: THand<'Left'> | undefined
  private calcEye: CalcEye
  private calcHumanoid: CalcHumanoid

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
    this.calcEye = new CalcEye()
    this.calcHumanoid = new CalcHumanoid()
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
    const { left, right, top, bottom } = this.calcEye.getEye(
      this.faceLandmarkerResult
    )
    return { yaw: left + right, pitch: top + bottom }
  }

  public getHumanoid(): VRMPose {
    if (!this.faceRig) return {}
    if (!this.poseRig) return {}

    return {
      [VRMHumanBoneName.Head]: this.calcHumanoid.getPose(
        this.faceRig.head.normalized
      ),
      [VRMHumanBoneName.Spine]: this.calcHumanoid.getPose(this.poseRig.Spine, {
        threshold: 0.05,
        name: 'Spine'
      }),
      [VRMHumanBoneName.LeftUpperArm]: this.calcHumanoid.getPose(
        this.poseRig.LeftUpperArm,
        {
          threshold: 0.01,
          name: 'LeftUpperArm'
        }
      ),
      [VRMHumanBoneName.LeftLowerArm]: this.calcHumanoid.getPose(
        this.poseRig.LeftLowerArm,
        {
          threshold: 0.01,
          name: 'LeftLowerArm'
        }
      ),
      [VRMHumanBoneName.RightUpperArm]: this.calcHumanoid.getPose(
        this.poseRig.RightUpperArm,
        {
          threshold: 0.01,
          name: 'RightUpperArm'
        }
      ),
      [VRMHumanBoneName.RightLowerArm]: this.calcHumanoid.getPose(
        this.poseRig.RightLowerArm,
        {
          threshold: 0.01,
          name: 'RightLowerArm'
        }
      ),
      [VRMHumanBoneName.RightHand]: this.calcHumanoid.getPose(
        this.poseRig.RightHand
      ),
      [VRMHumanBoneName.RightLittleDistal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightLittleDistal
      ),
      [VRMHumanBoneName.RightLittleIntermediate]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightLittleIntermediate
      ),
      [VRMHumanBoneName.RightLittleProximal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightLittleProximal
      ),
      [VRMHumanBoneName.RightRingDistal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightRingDistal
      ),
      [VRMHumanBoneName.RightRingIntermediate]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightRingIntermediate
      ),
      [VRMHumanBoneName.RightRingProximal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightRingProximal
      ),
      [VRMHumanBoneName.RightMiddleDistal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightMiddleDistal
      ),
      [VRMHumanBoneName.RightMiddleIntermediate]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightMiddleIntermediate
      ),
      [VRMHumanBoneName.RightMiddleProximal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightMiddleProximal
      ),
      [VRMHumanBoneName.RightIndexDistal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightIndexDistal
      ),
      [VRMHumanBoneName.RightIndexIntermediate]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightIndexIntermediate
      ),
      [VRMHumanBoneName.RightIndexProximal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightIndexProximal
      ),
      [VRMHumanBoneName.RightThumbDistal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightThumbDistal
      ),
      [VRMHumanBoneName.RightThumbMetacarpal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightThumbIntermediate
      ),
      [VRMHumanBoneName.RightThumbProximal]: this.calcHumanoid.getPose(
        this.rightHandRig?.RightThumbProximal
      ),
      [VRMHumanBoneName.LeftHand]: this.calcHumanoid.getPose(
        this.poseRig.LeftHand
      ),
      [VRMHumanBoneName.LeftLittleDistal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftLittleDistal
      ),
      [VRMHumanBoneName.LeftLittleIntermediate]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftLittleIntermediate
      ),
      [VRMHumanBoneName.LeftLittleProximal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftLittleProximal
      ),
      [VRMHumanBoneName.LeftRingDistal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftRingDistal
      ),
      [VRMHumanBoneName.LeftRingIntermediate]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftRingIntermediate
      ),
      [VRMHumanBoneName.LeftRingProximal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftRingProximal
      ),
      [VRMHumanBoneName.LeftMiddleDistal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftMiddleDistal
      ),
      [VRMHumanBoneName.LeftMiddleIntermediate]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftMiddleIntermediate
      ),
      [VRMHumanBoneName.LeftMiddleProximal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftMiddleProximal
      ),
      [VRMHumanBoneName.LeftIndexDistal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftIndexDistal
      ),
      [VRMHumanBoneName.LeftIndexIntermediate]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftIndexIntermediate
      ),
      [VRMHumanBoneName.LeftIndexProximal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftIndexProximal
      ),
      [VRMHumanBoneName.LeftThumbDistal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftThumbDistal
      ),
      [VRMHumanBoneName.LeftThumbMetacarpal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftThumbIntermediate
      ),
      [VRMHumanBoneName.LeftThumbProximal]: this.calcHumanoid.getPose(
        this.leftHandRig?.LeftThumbProximal
      )
    }
  }
}
