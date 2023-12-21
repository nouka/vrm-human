import {
  FaceLandmarker,
  FilesetResolver,
  HandLandmarker,
  PoseLandmarker
} from '@mediapipe/tasks-vision'

export default class MediaPipe {
  private vision: any
  private visionTaskBasePath =
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
  private faceLandmakerModelAssetPath =
    'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'
  private poseLandmakerModelAssetPath =
    'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task'
  private handLandmakerModelAssetPath =
    'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task'

  public static async build() {
    const Self = new MediaPipe()
    Self.vision = await Self.loadVision()
    return Self
  }

  private async loadVision() {
    return await FilesetResolver.forVisionTasks(this.visionTaskBasePath)
  }

  public async getFaceLandmarker() {
    return await FaceLandmarker.createFromOptions(this.vision, {
      baseOptions: {
        modelAssetPath: this.faceLandmakerModelAssetPath,
        delegate: 'GPU'
      },
      outputFaceBlendshapes: true,
      minFaceDetectionConfidence: 0.5,
      minFacePresenceConfidence: 0.5,
      minTrackingConfidence: 1.0,
      runningMode: 'VIDEO',
      numFaces: 1
    })
  }

  public async getPoseLandmarker() {
    return await PoseLandmarker.createFromOptions(this.vision, {
      baseOptions: {
        modelAssetPath: this.poseLandmakerModelAssetPath,
        delegate: 'GPU'
      },
      minPoseDetectionConfidence: 0.5,
      minPosePresenceConfidence: 0.5,
      minTrackingConfidence: 1.0,
      runningMode: 'VIDEO',
      numPoses: 1
    })
  }

  public async getHandLandmarker() {
    return await HandLandmarker.createFromOptions(this.vision, {
      baseOptions: {
        modelAssetPath: this.handLandmakerModelAssetPath,
        delegate: 'GPU'
      },
      minHandDetectionConfidence: 0.5,
      minHandPresenceConfidence: 0.5,
      minTrackingConfidence: 1.0,
      runningMode: 'VIDEO',
      numHands: 2
    })
  }
}
