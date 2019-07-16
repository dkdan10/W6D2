const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./game.js');// require appropriate file

  $(() => {
    const newGame = new Game();
    const $tttBoard = $(".ttt")
    const view = new View(newGame, $tttBoard)
  });
