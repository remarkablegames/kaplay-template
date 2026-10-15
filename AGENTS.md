---
name: dev-agent
description: Expert TypeScript developer for this KAPLAY game
---

## Guidance

- Follow the KAPLAY patterns and conventions
- Keep game logic clear and avoid unnecessary duplication
- Make changes runnable and easy to playtest

## Tech Stack

- KAPLAY 3001 (game engine)
- TypeScript 6 (strict mode)
- Vite 8 (build tool)
- Node.js 24
- localStorage using Kaplay functions `getData` and `setData`

## File Structure

- `src/` – code
- `public/` – assets

## Commands

- `npm run build`: builds web game with Vite, outputs to `dist/`
- `npm run lint`: runs ESLint; `npm run lint:fix` auto-fixes errors
- `npm run lint:tsc`: checks TypeScript for errors
- `npm start`: starts and opens the development web server at http://localhost:5173 (run manually by the user; don't execute automatically)

## Standards

Follow these rules for all code you write.

Assets:

- Asset paths must not start with a slash `/`

Naming conventions:

- Functions: camelCase (`getGameObject`, `createLevel`)
- Classes: PascalCase (`GameStateManager`, `Character`)
- Constants: UPPER_SNAKE_CASE (`GAME_CONFIG`, `MAX_LEVEL`)

Code style:

- [Prettier](./.prettierrc.json) for formatting
- [ESLint](./eslint.config.mts) with `typescript-eslint` strict and stylistic type-checked configs
  - Sort imports and exports with `simple-import-sort`
- Avoid unnecessary type casting, only annotate or assert types when inference is genuinely impossible

Examples:

```ts
// ✅ Good - let add() infer the full GameObj type
const overlay = add([rect(width(), height()), color(0, 0, 0), opacity(0.8)])

// ❌ Bad - using `any` instead of proper types
let gameObj: any
gameObj = add([text('Game Over'), pos(100, 100), color(0, 0, 0)])

// ❌ Bad - unnecessary type assertion on an already-inferred add() result
const tile = add([rect(64, 64), color(255, 0, 0)]) as GameObj<
  RectComp & ColorComp
>

// ✅ Good - annotate only when inference is genuinely impossible
import type { GameObj, OpacityComp, PosComp, TextComp } from 'kaplay'
function showGameOver(gameOverText: GameObj<TextComp & PosComp & OpacityComp>) {
  gameOverText.text = 'Game Over'
}

// ✅ Good - use ReturnType to name the type of an add()-based factory function,
// only when that type needs to be used elsewhere (e.g., in another file or interface)
import type { ColorComp, GameObj, RectComp } from 'kaplay'
function addTile() {
  return add([rect(64, 64), color(255, 0, 0)])
}
export type Tile = ReturnType<typeof addTile>


// ❌ Bad - annotating a factory's return type with a loose GameObj
// discards the precise component types inferred by add()
function createOverlay(): GameObj {
  return add([pos(), fixed(), z(100)])
}
let overlay: GameObj | null = null

// ✅ Good - let the factory infer, name the type with ReturnType at usage sites
// (works even when the function is declared later — function declarations are hoisted)
function createOverlay() {
  return add([pos(), fixed(), z(100)])
}
let overlay: ReturnType<typeof createOverlay> | null = null
```
