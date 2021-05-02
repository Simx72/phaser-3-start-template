import { height } from '../settings';
import { UIScene } from './templates/ui-scene';
export class StartScene extends UIScene {
  constructor() {
    super({
      key: 'start-scene'
    })
  }
  create() {
    const rect = this.add.rectangle(
      this.centerX,
      this.centerY,
      500,
      height * 0.16
    )

    const text = this.add.text(
      this.centerX,
      this.centerY + (height * 0.04),
      'Start',
      {
        color: '#000000',
        align: 'center',
        fontSize: '30pt'
      }
    ).setOrigin(0.5, 0)

    rect.setOrigin(0.5, 0)
      .setFillStyle(0xFFFFFF)
      .setInteractive()
      .on("pointerover", () => {
        rect.setFillStyle(0xCCCC44)
        this.game.canvas.style.cursor = 'pointer'
      })
      .on("pointerout", () => {
        rect.setFillStyle(0xFFFFFF)
        this.game.canvas.style.cursor = 'default'
      })
      .on("pointerdown", () => {
        rect.setFillStyle(0xCC4444)
        this.game.canvas.style.cursor = 'default'
        setTimeout(() => this.scene.stop().run('game-scene'), 500)
      })
    
  }
}