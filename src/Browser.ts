export default class Browser {
  private container: HTMLDivElement

  constructor() {
    // コンテナの生成
    const container = <HTMLDivElement>document.getElementById('container')
    container.style.width = `${window.innerWidth}px`
    container.style.height = `${window.innerHeight}px`
    container.style.position = 'relative'
    this.container = container
  }

  public requestAnimationFrame(callback: FrameRequestCallback) {
    window.requestAnimationFrame(callback)
  }

  /**
   * カメラからのVideo入力をElementにして返す
   *
   * @returns Promise<HTMLVideoElement>
   */
  public async loadVideo() {
    return new Promise<HTMLVideoElement>(async (resolve, reject) => {
      const video = document.createElement('video')
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user'
        }
      })
      video.srcObject = stream
      video.onloadedmetadata = () => resolve(video)
      video.onerror = reject
    })
  }

  public createCanvas() {
    return document.createElement('canvas')
  }

  public getContext(canvas: HTMLCanvasElement) {
    return canvas.getContext('2d')!
  }

  public createStartButton() {
    const startButton = document.createElement('button')
    startButton.textContent = 'カメラ読み込み開始'
    startButton.style.position = 'absolute'
    startButton.style.top = '10px'
    startButton.style.left = '10px'

    return startButton
  }

  public clearRect(
    context2D: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    context2D.clearRect(0, 0, width, height)
  }

  public drawVideo(
    context2D: CanvasRenderingContext2D,
    video: HTMLVideoElement,
    width: number,
    height: number
  ) {
    context2D.save()
    context2D.scale(-1, 1)
    context2D.drawImage(video, 0, 0, -width, height)
    context2D.restore()
  }

  public appendContainer(element: HTMLElement) {
    this.container.appendChild(element)
  }
}
