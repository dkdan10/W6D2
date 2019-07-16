
class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl; 
    this.setupTowers();
    this.setupEventHandlers();
    this.selected = null;
  }

  setupEventHandlers() {
    const $board = $('.board');
    const clickedPile = (e) => {
      if (e.target === e.currentTarget) {
        return;
      }
      const $ul = $(e.target);
      if (!this.selected) {
        this.selected = $ul;
        $ul.addClass('selected');
      } else {
        this.makeMove(this.selected, $ul)
      }
    }
    $board.on('click', clickedPile);
  }

  setupTowers(){
    for (let i = 0; i < 3; i++) {
      const $tower = $('<ul>');
      
      const $stone1 = $('<li>');
      const $stone2 = $('<li>');
      const $stone3 = $('<li>');
      if (i === 0){
        $stone1.addClass('disk1');
        $stone2.addClass('disk2');
        $stone3.addClass('disk3');
      }
      $tower.append($stone1)
      $tower.append($stone2)
      $tower.append($stone3)
      this.rootEl.append($tower);
    }
  }

  makeMove($startTower, $endTower) {
    this.selected = null
    $startTower.toggleClass('selected')
    if (this.isValidMove($startTower, $endTower)) {
      // let startDiskD = 0;
      // let endDiskD = 0;
      // const startD3 = $startTower.find('li').hasClass('disk3')
      // if (startD3) startDiskD = 3;
      // const startD2 = $startTower.find('li').hasClass('disk2')
      // if (startD2) startDiskD = 3;
      // const startD1 = $startTower.find('li').hasClass('disk1')
      // if (startD1) startDiskD = 3;
      // const endD3 = $endTower.find('li').hasClass('disk3')
      // if (endD3) endDiskD = 3;
      // const endD2 = $endTower.find('li').hasClass('disk2')
      // if (endD2) endDiskD = 2;

      // $startTower[0].lastChild.removeClass()
      // if (endD2) $endTower[0].lastChild.addClass('disk3');
      // if (endD1) $endTower[0].lastChild.addClass('disk3')
      // let swapWith = 
      return true;
    } else {
      alert("Invalid move!")
      return false;
    }
  }

  isValidMove($startTower, $endTower) {

    let startTopDisk = 0;
    let endTopDisk = 0;
    const startD3 = $startTower.find('li').hasClass('disk3')
    if (startD3) startTopDisk = 3;
    const startD2= $startTower.find('li').hasClass('disk2')
    if (startD2) startTopDisk = 3;
    const startD1 = $startTower.find('li').hasClass('disk1')
    if (startD1) startTopDisk = 3;
    const endD3 = $endTower.find('li').hasClass('disk3')
    if (endD3) endTopDisk = 3;
    const endD2 = $endTower.find('li').hasClass('disk2')
    if (endD2) endTopDisk = 2;
    const endD1 = $endTower.find('li').hasClass('disk1')
    if (endD1) endTopDisk = 1;

    if (startTopDisk === 0) {
      return false;
    } else if (endTopDisk === 0) {
      return true;
    } else {
      return startTopDisk < endTopDisk;
    }
  }


}

module.exports = HanoiView