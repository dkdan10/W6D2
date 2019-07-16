const MoveError = require("./move-error");

  const posPointer = {
    0: [0, 0],
    1: [0, 1],
    2: [0, 2],
    3: [1, 0],
    4: [1, 1],
    5: [1, 2],
    6: [2, 0],
    7: [2, 1],
    8: [2, 2],
  }

class Board {
  constructor() {
  }

  isEmptyPos(pos) {
    // if (!Board.isValidPos(pos)) {
    //   throw new MoveError('Is not valid position!');
    // }
    const $board = $('.board')[0];
    const $square = $board.childNodes[pos];

    return ($square.textContent.length === 0);
  }

  isOver() {
    if (this.winner() != null) {
      return {case: "winner"};
    }

    for (let liIdx = 0; liIdx < 9; liIdx++) {
        if (this.isEmptyPos(liIdx)) {
          return false;
        }
    }

    return {case: "draw"};
  }

  placeMark(pos) {
    pos = [parseInt(pos[0]), parseInt(pos[2])]
    // if (!this.isEmptyPos(pos)) {
    //   throw new MoveError('Is not an empty position!');
    // }
    // debugger
    // this.grid[pos[0]][pos[1]] = mark;
    return true
  }


  winner() {
    const posSeqs = [
      // horizontals
      [
        [0, 0],
        [0, 1],
        [0, 2]
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2]
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2]
      ],
      // verticals
      [
        [0, 0],
        [1, 0],
        [2, 0]
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1]
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2]
      ],
      // diagonals
      [
        [0, 0],
        [1, 1],
        [2, 2]
      ],
      [
        [2, 0],
        [1, 1],
        [0, 2]
      ]
    ];

    for (let i = 0; i < posSeqs.length; i++) {
      const winner = this.winnerHelper(posSeqs[i]);
      if (winner != null) {
        return winner;
      }
    }

    return null;
  }

  winnerHelper(posSeq) {
    const $board = $('.board')[0];
    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {
      const targetMark = Board.marks[markIdx];
      let winner = true;
      for (let posIdx = 0; posIdx < 3; posIdx++) {
        const pos = posSeq[posIdx];
        const keyFromPos = Object.keys(posPointer).filter(k => (posPointer[k][0] === pos[0] && posPointer[k][1] === pos[1]));
        // const mark = $('ul').eq(keyFromPos).text();
        const mark = $board.childNodes[keyFromPos[0]].textContent;


        if (mark != targetMark) {
          winner = false;
        }
      }

      if (winner) {
        return targetMark;
      }
    }

    return null;
  }

  static isValidPos(pos) {
    return (0 <= pos[0]) &&
      (pos[0] < 3) &&
      (0 <= pos[1]) &&
      (pos[1] < 3);
  }

}

Board.marks = ['X', 'O'];

module.exports = Board;
