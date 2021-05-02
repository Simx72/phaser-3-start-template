import { height, width } from '../settings';
import { PhysicsScene } from './templates/physics-scene';

type PhysicsImage = Phaser.Types.Physics.Arcade.ImageWithDynamicBody

export class GameScene extends PhysicsScene {
  constructor() {
    super({
      key: 'game-scene'
    })
  }
  preload() {
    this.load.image('logo', 'http://labs.phaser.io/assets/sprites/phaser3-logo.png')
    this.load.atlas('flares', 'http://labs.phaser.io/assets/particles/flares.png', 'http://labs.phaser.io/assets/particles/flares.json');
  }


  emitter1!: Phaser.GameObjects.Particles.ParticleEmitter
  emitter2!: Phaser.GameObjects.Particles.ParticleEmitter

  create() {

    const random = (min: number, max: number) => Phaser.Math.Between(min, max)

    const logo = this.object(
      'logo',
      this.physics.add.image(
        this.centerX,
        this.centerY,
        'logo'
      )
    )

    logo.setOrigin(0.5, 0.5)

    let vel = 300

    logo.body.setVelocity(
      random(-vel, vel),
      random(-vel, vel)
    )

    logo.body.setBounce(1, 1)

    logo.setCollideWorldBounds(true)
      .setDepth(1)


    var particles = this.add.particles('flares');

    this.emitter1 = particles.createEmitter({
      frame: 'blue',
      x: width * (-0.1),
      y: height,
      lifespan: 2000,
      speed: { min: 400, max: 600 },
      angle: -60,
      gravityY: 300,
      scale: { start: 0.4, end: 0 },
      quantity: 2,
      blendMode: 'ADD'
    });
    this.emitter2 = particles.createEmitter({
      frame: 'green',
      x: width * 1.1,
      y: height,
      lifespan: 2000,
      speed: { min: 400, max: 600 },
      angle: -180+60,
      gravityY: 300,
      scale: { start: 0.4, end: 0 },
      quantity: 2,
      blendMode: 'ADD'
    });

  }
  update() {
    const logo = this.object<PhysicsImage>('logo')

    let randomHeight = () => Phaser.Math.Between(height * 0.2, height);

    this.emitter1.setPosition(width * (-0.1), randomHeight())
    this.emitter2.setPosition(width * 1.1, randomHeight())
  }
}