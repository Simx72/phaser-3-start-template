/// <reference path="../node_modules/phaser/types/phaser.d.ts"/>

import { SCENES } from "./scenes"
import { width, height } from "./settings";

let gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width,
  height,
  scene: SCENES,
  title: '[Game name]',
  version: '0.0.0',
  render: {
    transparent: true
  },
  physics: {
    arcade: {
      gravity: { x: 0, y: 10 },

      /* this option will show velocities and colliders */
      debug: false
    },
    default: 'arcade'
  }
}

const GAME = new Phaser.Game(gameConfig)

export { GAME };