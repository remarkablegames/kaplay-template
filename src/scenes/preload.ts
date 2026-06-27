import { SCENE, SPRITE } from '../constants'

scene(SCENE.PRELOAD, () => {
  Object.values(SPRITE).forEach(
    (sprite) => void loadSprite(sprite.id, sprite.src),
  )

  go(SCENE.GAME)
})
