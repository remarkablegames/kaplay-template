import { Sprite, Tag } from '../constants'

export function addEnemy(x: number, y: number) {
  const enemy = add([
    sprite(Sprite.Ghosty),
    pos(x, y),
    anchor('center'),
    Tag.Enemy,
  ])

  return enemy
}
