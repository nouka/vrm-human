import { Vector, XYZ } from 'kalidokit'
import Euler from 'kalidokit/dist/utils/euler'
import * as THREE from 'three'

// メモ化用の変数
let memo:
  | {
      [key: string]: {
        rotation: [number, number, number, number]
      }
    }
  | undefined = undefined

export default class CalcHumanoid {
  private getQuaternionFromEuler(rig: XYZ | Euler | Vector | undefined) {
    if (!rig) return
    let euler = new THREE.Euler(rig.x, rig.y, rig.z)
    if (rig instanceof Euler) {
      euler = new THREE.Euler(rig.x, rig.y, rig.z, rig.rotationOrder)
    }
    return new THREE.Quaternion().setFromEuler(euler)
  }

  private getRotationByQuaternion(
    q: THREE.Quaternion | undefined
  ): [number, number, number, number] {
    return [q?.x ?? 0, q?.y ?? 0, q?.z ?? 0, q?.w ?? 0]
  }

  public getPose(
    rig: XYZ | Euler | Vector | undefined,
    memoOption?: {
      threshold: number
      name: string
    }
  ) {
    const pose = {
      rotation: this.getRotationByQuaternion(this.getQuaternionFromEuler(rig))
    }
    if (memoOption) {
      if (memo && memo[memoOption.name]?.rotation.length > 0) {
        for (let i = 0; i < 4; i++) {
          if (
            Math.abs(memo[memoOption.name].rotation[i] - pose.rotation[i]) <
            memoOption.threshold
          )
            pose.rotation[i] = memo[memoOption.name].rotation[i]
        }
      }
      memo = { ...memo, ...{ [memoOption.name]: pose } }
    }
    return pose
  }
}
