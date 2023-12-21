import './style.css'

import Engine from './Engine'
import Game from './Game'

async function main() {
  try {
    const game = await Game.create('./models/test.vrm')
    const engine = new Engine(game)
    const startButton = engine.getStartButton()
    startButton.onclick = async () => {
      await engine.start()
    }
  } catch (e) {
    console.error(e)
  }
}

window.onload = main
