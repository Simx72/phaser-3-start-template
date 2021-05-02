import { height, width } from "../../settings"

export class DefaultScene extends Phaser.Scene {
  constructor(options: { key: string }) {
    super({
      key: options.key,
      physics: {
        default: 'arcade'
      }
    })
  }
  centerX = width / 2
  centerY = height / 2

  _objects: { [c: string]: Phaser.GameObjects.GameObject } = {}
  
  /**
   * This function returns an object with the given key
   * @param key - the object key
   */
  getObject<T extends Phaser.GameObjects.GameObject>(key: string) {
    return this._objects[key] as T
  }

  /**
   * This function saves an object in the scene
   * @param key - the key you want to give to the object
   * @param object - the object you want to save
   */
  setObject<T extends Phaser.GameObjects.GameObject>(key: string, object: T) {
    this._objects[key] = object
    return object
  }

  /**
   * This function returns an object with the given key
   * @param key - the object key
   */
  object<T extends Phaser.GameObjects.GameObject>(key: string): T

  /**
   * This function saves an object in the scene
   * @param key - the key you want to give to the object
   * @param object - the object you want to save
   */
  object<T extends Phaser.GameObjects.GameObject>(key: string, object: T): T
  
  object<T extends Phaser.GameObjects.GameObject>(key: string, object?: T) {
    if (typeof object != 'undefined') {
      return this.setObject<T>(key, object)
    } else {
      return this.getObject<T>(key)
    }
  }


  /**
   * Here you should put methods and 
   * props you will use in all scenes.
   * for example a method for open an 
   * URL in a new Tab:
   * 
   * open(url: string) {
   *   window.open(url, '_blank')
   * }
   * 
   * 
   * or save the auth key of your 
   * assets server:
   * 
   * authKey = '12345abcde';
   * 
   */

}
