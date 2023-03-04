var LivingCreature = require('./LivingCreature');

module.exports = class Grass extends LivingCreature {


    mul() {
        this.multiply++;
        var newcells = this.chooseCell(0);

        var newCell = newcells[Math.floor(Math.random() * newcells.length)]
        
        
        
        
        
        if (this.multiply >= 3 && newCell) { //8 er
           

            var newGrass = new Grass(newCell[0], newCell[1], this.index);

            grassArr.push(newGrass);

            matrix[newCell[1]][newCell[0]] = 1;

            this.multiply = 0;

        }

    }

    eat() {
        var result = this.chooseCell(4)
       
        var newCell = result[Math.floor(Math.random() * result.length)]
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