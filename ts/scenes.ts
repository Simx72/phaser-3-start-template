import { GameScene } from "./scenes/game-scene";
import { StartScene } from './scenes/start-scene';

const SCENES: (typeof Phaser.Scene)[] = [StartScene, GameScene]

export { SCENES };