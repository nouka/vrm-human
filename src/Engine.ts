import Browser from './Browser'
import Game from './Game'

export default class Engine {
  private game: Game
  private browser: Browser
  private cameraCanvas: HTMLCanvasElement
  private startButton: HTMLButtonElement
  private lastVideoTime: number = -1

  constructor(game: Game) {
    const browser = new Browser()

    // 自分の映像を写すCanvasの生成
    const cameraCanvas = browser.createCanvas()
    cameraCanvas.style.position = 'absolute'
    cameraCanvas.style.bottom = '0'
    cameraCanvas.style.right = '0'
    this.cameraCanvas = cameraCanvas

    // スタートボタンの生成
    const startButton = browser.createStartButton()
    this.startButton = startButton

    // コンテナにDOMを追加する
    browser.appendContainer(game.getDomElement())
    browser.appendContainer(cameraCanvas)
    browser.appendContainer(startButton)

    this.browser = browser
    this.game = game
  }

  /**
   * スタートボタンの取得
   *
   * @returns HTMLButtonElement
   */
  public getStartButton() {
    return this.startButton
  }

  /**
   * スタート処理
   */
  public async start() {
    // Videoをロードして再生
    const video = await this.browser.loadVideo()
    video.play()

    // サイズ調整
    const widthRetio = window.innerWidth <= 640 ? 2 : 4
    this.cameraCanvas.width = video.videoWidth / widthRetio
    this.cameraCanvas.height =
      (video.videoHeight / video.videoWidth) * this.cameraCanvas.width

    // コンテキスト取得
    const cameraCanvasCtx = this.browser.getContext(this.cameraCanvas)

    // ループ処理
    const tick = async (pref: number) => {
      this.browser.requestAnimationFrame(tick)

      // Update処理
      if (video.currentTime !== this.lastVideoTime) {
        await this.game.update(video, pref)
        this.lastVideoTime = video.currentTime
      }

      // 画面をクリア
      this.browser.clearRect(
        cameraCanvasCtx,
        this.cameraCanvas.width,
        this.cameraCanvas.height
      )

      // Videoを表示
      this.browser.drawVideo(
        cameraCanvasCtx,
        video,
        this.cameraCanvas.width,
        this.cameraCanvas.height
      )

      // レンダー
      this.game.render()
    }

    // ループの実行
    await tick(0)
  }
}
