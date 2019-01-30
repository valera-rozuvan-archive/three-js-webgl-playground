import './styles/main.scss';

import { Application } from './application.ts';
import { Game } from './game.ts';

const app = new Application();

app.onRendererReady(() => {
  const game = new Game(app);
});
