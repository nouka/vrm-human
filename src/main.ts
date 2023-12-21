import './style.css'

import Game from './Game'
import Browser from './Browser'

async function main() {
  const game = await Game.build()
  const browser = new Browser()

  // canvasエレメントを作成
  const canvas = document.createElement('canvas')
  const context2D = canvas.getContext('2d')!
  // videoエレメントを作成
  let video: HTMLVideoElement
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
  container.appendChild(game.getDomElement())
  container.appendChild(canvas)
  container.appendChild(startButton)

  // カメラ映像をvideoにアタッチ
  startButton.onclick = async () => {
    try {
      video = await browser.loadVideo()
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
    } catch (e) {
      console.error(e)
      return
    }
  }

  // 最終更新時間
  let lastVideoTime = -1

  // ループ処理
  const tick = async (pref: number) => {
    if (video.currentTime !== lastVideoTime) {
      await game.update(video, pref)
      lastVideoTime = video.currentTime
    }

    // 画面をクリア
    context2D.clearRect(0, 0, canvas.width, canvas.height)

    // Videoを表示
    drawVideo(context2D)

    // 3Dレンダラー
    game.render()

    window.requestAnimationFrame(tick)
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
}

window.onload = main
