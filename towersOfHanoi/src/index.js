const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js')

$(() => {
  const rootEl = $('.board');

  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
