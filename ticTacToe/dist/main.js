/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MoveError = __webpack_require__(/*! ./move-error */ \"./src/move-error.js\");\n\n  const posPointer = {\n    0: [0, 0],\n    1: [0, 1],\n    2: [0, 2],\n    3: [1, 0],\n    4: [1, 1],\n    5: [1, 2],\n    6: [2, 0],\n    7: [2, 1],\n    8: [2, 2],\n  }\n\nclass Board {\n  constructor() {\n  }\n\n  isEmptyPos(pos) {\n    // if (!Board.isValidPos(pos)) {\n    //   throw new MoveError('Is not valid position!');\n    // }\n    const $board = $('.board')[0];\n    const $square = $board.childNodes[pos];\n\n    return ($square.textContent.length === 0);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return {case: \"winner\"};\n    }\n\n    for (let liIdx = 0; liIdx < 9; liIdx++) {\n        if (this.isEmptyPos(liIdx)) {\n          return false;\n        }\n    }\n\n    return {case: \"draw\"};\n  }\n\n  placeMark(pos) {\n    pos = [parseInt(pos[0]), parseInt(pos[2])]\n    // if (!this.isEmptyPos(pos)) {\n    //   throw new MoveError('Is not an empty position!');\n    // }\n    // debugger\n    // this.grid[pos[0]][pos[1]] = mark;\n    return true\n  }\n\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [\n        [0, 0],\n        [0, 1],\n        [0, 2]\n      ],\n      [\n        [1, 0],\n        [1, 1],\n        [1, 2]\n      ],\n      [\n        [2, 0],\n        [2, 1],\n        [2, 2]\n      ],\n      // verticals\n      [\n        [0, 0],\n        [1, 0],\n        [2, 0]\n      ],\n      [\n        [0, 1],\n        [1, 1],\n        [2, 1]\n      ],\n      [\n        [0, 2],\n        [1, 2],\n        [2, 2]\n      ],\n      // diagonals\n      [\n        [0, 0],\n        [1, 1],\n        [2, 2]\n      ],\n      [\n        [2, 0],\n        [1, 1],\n        [0, 2]\n      ]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    const $board = $('.board')[0];\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const keyFromPos = Object.keys(posPointer).filter(k => (posPointer[k][0] === pos[0] && posPointer[k][1] === pos[1]));\n        // const mark = $('ul').eq(keyFromPos).text();\n        const mark = $board.childNodes[keyFromPos[0]].textContent;\n\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n      (pos[0] < 3) &&\n      (0 <= pos[1]) &&\n      (pos[1] < 3);\n  }\n\n}\n\nBoard.marks = ['X', 'O'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst MoveError = __webpack_require__(/*! ./move-error */ \"./src/move-error.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    return this.board.placeMark(pos, this.currentPlayer);\n    // this.swapTurn();\n  }\n\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\"); // require appropriate file\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");// require appropriate file\n\n  $(() => {\n    const newGame = new Game();\n    const $tttBoard = $(\".ttt\")\n    const view = new View(newGame, $tttBoard)\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/move-error.js":
/*!***************************!*\
  !*** ./src/move-error.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MoveError = function (msg) {\n  this.msg = msg;\n};\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack:///./src/move-error.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\n  constructor(game, $el) {\n    this.game = game;\n    // this.$el = $el\n    this.setupBoard($el);\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    const $ul = $('ul');\n    const toggleLi = (e) => {\n      if (e.target === e.currentTarget) {\n        return;\n      }\n      const $li = $(e.target);\n      if ($li.text().length === 0 && this.game.playMove($li.attr('data-pos'))) this.makeMove($li);\n    }\n    $ul.on('click', toggleLi);\n  }\n\n  makeMove($li) {\n    $li.text(this.game.currentPlayer);\n    $li.addClass('selected');\n    const over = this.game.isOver()\n    if (over) {\n      if (over.case === \"draw\") {\n        alert(\"Game Is Over. It was a draw\");\n      } else {\n        alert(`Game Is Over. ${this.game.currentPlayer} win`);\n      }\n      // $('.ttt').empty();\n      // this.setupBoard();\n    }\n    this.game.swapTurn();\n  }\n\n  setupBoard($ttt) {\n    const $ul = $('<ul>');\n    $ul.addClass('board')\n    \n    for (let i = 0; i < 9; i++) {\n      const rowIdx = Math.floor(i / 3);\n      const colIdx = i % 3;\n      const $newLi = $('<li>');\n      $newLi.addClass('tile');\n      $newLi.attr(\"data-pos\", [rowIdx, colIdx])\n      $ul.append($newLi);\n      \n      \n    }\n    $ttt.append($ul);\n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ });