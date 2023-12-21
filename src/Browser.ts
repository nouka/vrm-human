export default class Browser {
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
}
