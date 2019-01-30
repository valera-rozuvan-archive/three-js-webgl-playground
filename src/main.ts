import './styles/main.scss';

import { Application } from './application';
import { Game } from './game';

const app = new Application();

app.onRendererReady(() => {
  const game = new Game(app);
});
