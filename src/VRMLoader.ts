import { VRM, VRMLoaderPlugin } from '@pixiv/three-vrm'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export default class VRMLoader {
  private loader: GLTFLoader

  constructor() {
    // ローダにVRMプラグインを登録
    const loader = new GLTFLoader()
    loader.register((parser) => {
      return new VRMLoaderPlugin(parser)
    })
    this.loader = loader
  }

  /**
   * @param filePath 読み込むVRMのパス
   */
  public async load(filePath: string) {
    return new Promise<VRM>((resolve, reject) => {
      this.loader.load(
        filePath,
        (gltf) => resolve(gltf.userData.vrm),
        (progress) =>
          console.info(
            'Loading model...',
            100.0 * (progress.loaded / progress.total),
            '%'
          ),
        reject
      )
    })
  }
}
