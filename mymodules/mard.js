class Mard extends LivingCreature{
  constructor(x, y, index) {
    super(x, y, index);
    // this.x = x;

    // this.y = y;
    // this.index = index;
    this.energy = 5;
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
  chooseCell(character, character1, character2) {
    this.getNewCoordinates();
    return super.chooseCell(character, character1, character2 );
    // var found = [];

    // for (var i in this.directions) {
    //   var x = this.directions[i][0];

    //   var y = this.directions[i][1];
    //   if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //     if (
    //       matrix[y][x] == character ||
    //       matrix[y][x] == character1 ||
    //       matrix[y][x] == character2
    //     ) {
    //       found.push(this.directions[i]);
    //     }
    //   }
    // }

    // return found;
  }

  die() {
    matrix[this.y][this.x] = 0;
    for (var i in mardArr) {
      if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
        mardArr.splice(i, 1);
        break;
      }
    }
  }

  move() {
    if (this.energy > 0) {
      this.energy--;
      var result = this.chooseCell(0);
      var newCell = random(result);

      if (newCell) {
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 6;
        matrix[this.y][this.x] = 0;
        this.y = y;
        this.x = x;
      }
    } else {
      this.die();
    }
  }
    mul() {
      var newcells = this.chooseCell(0);
      var newCell = random(newcells);
      if (this.energy >= 8 && newCell) {
        var newMard = new Mard(newCell[0], newCell[1], this.index);

        mardArr.push(newMard);

        matrix[newCell[1]][newCell[0]] = 6;

        this.energy = 5;
      }
    }
//   mul() {
//     if (this.energy >= 15) {
//       let newCell = random(this.chooseCell(0));

//       if (newCell) {
//         var norMard = new Mard(newCell[0], newCell[1]);

//         grasseaterArr.push(norMard);
//       }
//     }
//   }
  eat() {
    var result = this.chooseCell(1, 2, 4);
    var newCell = random(result);

    if (newCell) {
      this.energy++;
      var x = newCell[0];
      var y = newCell[1];
      matrix[y][x] = 6;
      matrix[this.y][this.x] = 0;
      this.y = y;
      this.x = x;

      if (matrix[newCell[1]][newCell[0]] == 1) {
        for (var i in grassArr) {
          if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
            grassArr.splice(i, 1);
            break;
          }
        }
      } else if (matrix[newCell[1]][newCell[0]] == 2) {
        for (var i in grasseaterArr) {
          if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
            grasseaterArr.splice(i, 1);
            break;
          }
        }
      } else if (matrix[newCell[1]][newCell[0]] == 4) {
        for (var i in jurArr) {
          if (this.x == jurArr[i].x && this.y == jurArr[i].y) {
            jurArr.splice(i, 1);
            break;
          }
        }
      }
    } else {
      this.move();
    }
  }
}
