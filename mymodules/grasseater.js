var LivingCreature = require('./LivingCreature');
module.exports = class Grasseater extends LivingCreature{

    constructor(x, y, index) {
super(x, y, index);
this.mulTime = 20;
        //// this.x = x;

       // // this.y = y;
       // // this.index = index;
        this.energy = 8;
        //// this.directions = [];
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

            [this.x + 1, this.y + 1]

        ];

    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
       ///////// // var found = [];

        // for (var i in this.directions) {

        //     var x = this.directions[i][0];

        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        //         if (matrix[y][x] == character) {

        //             found.push(this.directions[i]);

        //         }
        //     }
        // }

        ////////// return found;


    }

    die() {
    
        matrix[this.y][this.x] = 0
        for (var i in grasseaterArr) {
            if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                grasseaterArr.splice(i, 1);
                break;
            }
        }
    }


    move() {
        if (this.energy > 0) {
            this.energy--
            var result = this.chooseCell(0)
            var newCell = result[Math.floor(Math.random() * result.length)]
            if (newCell) {
                let x = newCell[0];
                let y = newCell[1];
                matrix[y][x] = 2
                matrix[this.y][this.x] = 0;
                this.y = y
                this.x = x
            }
        } else { 
            this.die()
         } 
    }
    mul() {
        var newcells = this.chooseCell(0)
        var newCell = newcells[Math.floor(Math.random() * newcells.length)]
        if (this.energy >= 8  && newCell) { //12 er skzbum

        
            var newGrasseater = new Grasseater(newCell[0], newCell[1], this.index);

            grasseaterArr.push(newGrasseater);

            matrix[newCell[1]][newCell[0]] = 2;

            this.energy = 5;

        }

    }
    eat() {
        var result = this.chooseCell(1)
        var newCell = result[Math.floor(Math.random() * result.length)]
       
        if (newCell) { 
            this.energy++
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0;
            this.y = y
            this.x = x

            for (var i in grassArr) {

                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {

                    grassArr.splice(i, 1);

                    break;

                }

            }
            if (this.energy >= this.mulTime) {
                this.mul()
            }
        } else {
            this.move()
        }
        }
        
        
       
    }

