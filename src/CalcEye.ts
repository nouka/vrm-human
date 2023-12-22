import { FaceLandmarkerResult } from '@mediapipe/tasks-vision'

export default class CalcEye {
  private threshold = 50
  private getScore(result: FaceLandmarkerResult, name: string): number {
    return (
      result.faceBlendshapes[0]?.categories.filter(
        (category) => category.categoryName === name
      )[0].score ?? 0
    )
  }

  public getEye(result: FaceLandmarkerResult) {
    const eyeLookInRight = this.getScore(result, 'eyeLookInRight')
    const eyeLookInLeft = this.getScore(result, 'eyeLookInLeft')
    const eyeLookOutRight = this.getScore(result, 'eyeLookOutRight')
    const eyeLookOutLeft = this.getScore(result, 'eyeLookOutLeft')
    const eyeLookUpRight = this.getScore(result, 'eyeLookUpRight')
    const eyeLookUpLeft = this.getScore(result, 'eyeLookUpLeft')
    const eyeLookDownRight = this.getScore(result, 'eyeLookDownRight')
    const eyeLookDownLeft = this.getScore(result, 'eyeLookDownLeft')

    return {
      left: -this.threshold * ((eyeLookInRight + eyeLookOutLeft) / 2),
      right: this.threshold * ((eyeLookOutRight + eyeLookInLeft) / 2),
      top: -this.threshold * ((eyeLookUpRight + eyeLookUpLeft) / 2),
      bottom: this.threshold * ((eyeLookDownRight + eyeLookDownLeft) / 2)
    }
  }
}
