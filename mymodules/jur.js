const LivingCreature = require('./LivingCreature');
module.exports = class Jur extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
    // this.x = x;
    // this.y = y;
    // this.index = index;
    this.multiply = 0;
    this.jermutyun = 90;
    // this.directions = [];
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],

      [this.x, this.y - 1],

      [this.x + 1, this.y - 1],

      [this.x - 1, this.y],

      [this.x + 1, this.y],

      [this.x - 1, this.y + 1],

      [this.x, this.y + 1],

      [this.x + 1, this.y + 1],
    ];
  }
  chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
    // var found = [];

    // for (var i in this.directions) {
    //   var x = this.directions[i][0];

    //   var y = this.directions[i][1];
    //   if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //     if (matrix[y][x] == character) {
    //       found.push(this.directions[i]);
    //     }
    //   }
    // }

    // return found;
  }

  mul() {
    this.multiply++;
    var res = this.chooseCell(0)
    var newCell = Math.floor(Math.random() * res);
    if (this.multiply >= 3 && newCell) {
      var newJur = new Jur(newCell[0], newCell[1], this.index);

      jurArr.push(newJur);

      matrix[newCell[1]][newCell[0]] = 4;

      this.multiply = 0;
    }
  }

  golorshacum() {

    matrix[this.y][this.x] = 0;
    for (var i in jurArr) {
      if (this.x == jurArr[i].x && this.y == jurArr[i].y) {
        jurArr.splice(i, 1);
        break;
      }
    }

  }

  move() {
    if (this.jermutyun < 100) {
      this.jermutyun++;
      var result = this.chooseCell(0);
      var newCell = Math.floor(Math.random() * result);

      if (newCell) {
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 4;
        matrix[this.y][this.x] = 0;
        this.y = y;
        this.x = x;
      }
    } else {
      this.golorshacum();
    }
  }
}
