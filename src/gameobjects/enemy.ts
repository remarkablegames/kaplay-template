import { SPRITE, TAG } from '../constants'

export function addEnemy(x: number, y: number) {
  const enemy = add([
    sprite(SPRITE.GHOSTY),
    pos(x, y),
    anchor('center'),
    TAG.ENEMY,
  ])

  return enemy
}
