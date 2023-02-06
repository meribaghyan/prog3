class Grass {

    constructor(x, y, index) {

        this.x = x;

        this.y = y;

        this.index = index;

        this.multiply = 0;
        this.directions = [

            [this.x - 1, this.y - 1],

            [this.x, this.y - 1],

            [this.x + 1, this.y - 1],

            [this.x - 1, this.y],

            [this.x + 1, this.y],

            [this.x - 1, this.y + 1],

            [this.x, this.y + 1],

            [this.x + 1, this.y + 1]

        ];

    }
    chooseCell(character) {

        var found = [];

        for (var i in this.directions) {

            var x = this.directions[i][0];

            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {

                    found.push(this.directions[i]);

                }
            }
        }

        return found;

    }
    
    mul() {

        this.multiply++;

        var newCell = random(this.chooseCell(0));

        // console.log(newCell, this.multiply);

        if (this.multiply >= 4 && newCell) { //8 er

            var newGrass = new Grass(newCell[0], newCell[1], this.index);

            grassArr.push(newGrass);

            matrix[newCell[1]][newCell[0]] = 1;

            this.multiply = 0;

        }

    }

    eat() {
        var result = this.chooseCell(4)
        var newCell = random(result);

        if (newCell) {
            this.energy++
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 1
            matrix[this.y][this.x] = 0;
            this.y = y
            this.x = x

            for (var i in jurArr) {

                if (this.x == jurArr[i].x && this.y == jurArr[i].y) {

                    jurArr.splice(i, 1);

                    break;

                }

            }
        }
       
    }
}