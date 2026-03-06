import { SCENE, SPRITE } from '../constants'

scene(SCENE.PRELOAD, () => {
  loadSprite(SPRITE.BEAN, 'sprites/bean.png')
  loadSprite(SPRITE.GHOSTY, 'sprites/ghosty.png')
  go(SCENE.GAME)
})
