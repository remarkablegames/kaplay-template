<p align="center">
  <img src="public/favicon.png" width="200" alt="Kaplay Template">
</p>

# Kaplay Template

[![release](https://img.shields.io/github/v/release/remarkablegames/kaplay-template)](https://github.com/remarkablegames/kaplay-template/releases)
[![build](https://github.com/remarkablegames/kaplay-template/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/kaplay-template/actions/workflows/build.yml)

<kbd>kaplay-template</kbd> is a template for making [KAPLAY](https://kaplayjs.com/) games.

Play the game on:

- [remarkablegames](https://remarkablegames.org/kaplay-template)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#readme)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/kaplay-template.git
cd kaplay-template
```

Install the dependencies:

```sh
npm install
```

Update the environment variables:

```sh
cp .env .env.local
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and compresses the contents into a ZIP archive in the `dist` folder.

Your game can be uploaded to your server, [itch.io](https://itch.io/), [newgrounds](https://www.newgrounds.com/), etc.

## License

[MIT](LICENSE)
