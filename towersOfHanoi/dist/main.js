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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class HanoiGame {\n  constructor () {\n    \n  }\n}\n\nmodule.exports = HanoiGame\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/hanoi-view.js":
/*!***************************!*\
  !*** ./src/hanoi-view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass HanoiView {\n  constructor(game, rootEl) {\n    this.game = game;\n    this.rootEl = rootEl; \n    this.setupTowers();\n    this.setupEventHandlers();\n    this.selected = null;\n  }\n\n  setupEventHandlers() {\n    const $board = $('.board');\n    const clickedPile = (e) => {\n      if (e.target === e.currentTarget) {\n        return;\n      }\n      const $ul = $(e.target);\n      if (!this.selected) {\n        this.selected = $ul;\n        $ul.addClass('selected');\n      } else {\n        this.makeMove(this.selected, $ul)\n      }\n    }\n    $board.on('click', clickedPile);\n  }\n\n  setupTowers(){\n    for (let i = 0; i < 3; i++) {\n      const $tower = $('<ul>');\n      \n      const $stone1 = $('<li>');\n      const $stone2 = $('<li>');\n      const $stone3 = $('<li>');\n      if (i === 0){\n        $stone1.addClass('disk1');\n        $stone2.addClass('disk2');\n        $stone3.addClass('disk3');\n      }\n      $tower.append($stone1)\n      $tower.append($stone2)\n      $tower.append($stone3)\n      this.rootEl.append($tower);\n    }\n  }\n\n  makeMove($startTower, $endTower) {\n    this.selected = null\n    $startTower.toggleClass('selected')\n    if (this.isValidMove($startTower, $endTower)) {\n      let brickToMove = $startTower[0].lastChild;\n      \n      let swapWith = $endTower[0].lastChild;\n      return true;\n    } else {\n      alert(\"Invalid move!\")\n      return false;\n    }\n  }\n\n  isValidMove($startTower, $endTower) {\n\n    let startTopDisk = 0;\n    let endTopDisk = 0;\n    const startD3 = $startTower.find('li').hasClass('disk3')\n    if (startD3) startTopDisk = 3;\n    const startD2= $startTower.find('li').hasClass('disk2')\n    if (startD2) startTopDisk = 3;\n    const startD1 = $startTower.find('li').hasClass('disk1')\n    if (startD1) startTopDisk = 3;\n    const endD3 = $endTower.find('li').hasClass('disk3')\n    if (endD3) endTopDisk = 3;\n    const endD2 = $endTower.find('li').hasClass('disk2')\n    if (endD2) endTopDisk = 2;\n    const endD1 = $endTower.find('li').hasClass('disk1')\n    if (endD1) endTopDisk = 1;\n\n    if (startTopDisk === 0) {\n      return false;\n    } else if (endTopDisk === 0) {\n      return true;\n    } else {\n      return startTopDisk < endTopDisk;\n    }\n  }\n\n\n}\n\nmodule.exports = HanoiView\n\n//# sourceURL=webpack:///./src/hanoi-view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const HanoiGame = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst HanoiView = __webpack_require__(/*! ./hanoi-view.js */ \"./src/hanoi-view.js\")\n\n$(() => {\n  const rootEl = $('.board');\n\n  const game = new HanoiGame();\n  new HanoiView(game, rootEl);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });