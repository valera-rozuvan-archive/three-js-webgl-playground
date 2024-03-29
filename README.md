# Three.js WebGL Playground

## wip has moved

Future work on this repository has moved to the monorepo [valera-rozuvan/experiments](https://github.com/valera-rozuvan/experiments). This repo is archived for historic purposes (to preserve commit history). Navigate over to [experiments/three-js-webgl-playground](https://github.com/valera-rozuvan/experiments/tree/main/three-js-webgl-playground) to see updates (if any).

## introduction

Quickly get going with developing a Three.js WebGL application using TypeScript & WebPack.

## Live version

See a live preview of this project hosted via GitHub pages:
[https://valera-rozuvan.github.io/three-js-webgl-playground](https://valera-rozuvan.github.io/three-js-webgl-playground).

## Running & Building

To start hacking:

```
git clone https://github.com/valera-rozuvan/three-js-webgl-playground
cd ./three-js-webgl-playground
npm install
npm run start
```

This will get you a development server up and running with livereload capability.
Navigate to `http://localhost:8080/` and observe a spinning cube.

To generate static files:

```
npm run build
```

This will produce a `./dist` folder with `html`, `js`, and `css` files.

## Production mode

To build the application for production environment, we need to disable source maps and also minify
the static files. The following commands are available:

```
npm run start-prod
npm run build-prod
```

## License

Licensed under the MIT license. See [LICENSE](LICENSE) file for more details.

## Enjoy ;)
