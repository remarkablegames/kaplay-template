import { SPRITE, TAG } from '../constants'
import { addCursorKeys } from '../events'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(SPRITE.BEAN),
    pos(x, y),
    rotate(0),
    anchor('center'),
    TAG.PLAYER,
  ])

  addCursorKeys(player)

  player.onUpdate(() => {
    player.angle += 120 * dt()
  })

  return player
}
