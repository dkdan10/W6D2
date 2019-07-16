class View {
  constructor(game, $el) {
    this.game = game;
    // this.$el = $el
    this.setupBoard($el);
    this.bindEvents();
  }

  bindEvents() {
    const $ul = $('ul');
    const toggleLi = (e) => {
      if (e.target === e.currentTarget) {
        return;
      }
      const $li = $(e.target);
      if ($li.text().length === 0 && this.game.playMove($li.attr('data-pos'))) this.makeMove($li);
    }
    $ul.on('click', toggleLi);
  }

  makeMove($li) {
    $li.text(this.game.currentPlayer);
    $li.addClass('selected');
    const over = this.game.isOver()
    if (over) {
      if (over.case === "draw") {
        alert("Game Is Over. It was a draw");
      } else {
        alert(`Game Is Over. ${this.game.currentPlayer} win`);
      }
      // $('.ttt').empty();
      // this.setupBoard();
    }
    this.game.swapTurn();
  }

  setupBoard($ttt) {
    const $ul = $('<ul>');
    $ul.addClass('board')
    
    for (let i = 0; i < 9; i++) {
      const rowIdx = Math.floor(i / 3);
      const colIdx = i % 3;
      const $newLi = $('<li>');
      $newLi.addClass('tile');
      $newLi.attr("data-pos", [rowIdx, colIdx])
      $ul.append($newLi);
      
      
    }
    $ttt.append($ul);
  }
}

module.exports = View;
