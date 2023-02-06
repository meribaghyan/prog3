// class Bomb {

//     constructor(x, y, index) {

//         this.x = x;

//         this.y = y;
//         this.index = index;
//         this.energy = 8;
//         this.directions = [];
//     }
//     getNewCoordinates() {

//         this.directions = [

//             [this.x - 1, this.y - 1],

//             [this.x, this.y - 1],

//             [this.x + 1, this.y - 1],

//             [this.x - 1, this.y],

//             [this.x + 1, this.y],

//             [this.x - 1, this.y + 1],

//             [this.x, this.y + 1],

//             [this.x + 1, this.y + 1]

//         ];

//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];

//         for (var i in this.directions) {

//             var x = this.directions[i][0];

//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {

//                     found.push(this.directions[i]);

//                 }
//             }
//         }

//         return found;


//     }

//     die() {
//         matrix[this.y][this.x] = 0
//         for (var i in bombArr) {
//             if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
//                 bombArr.splice(i, 1);
//                 break;
//             }
//         }
//     }


//     move() {
//         if (this.energy > 0) {
//             this.energy--
//             var result = this.chooseCell(0)
//             var newCell = random(result);

//             if (newCell) {
//                 let x = newCell[0];
//                 let y = newCell[1];
//                 matrix[y][x] = 5
//                 matrix[this.y][this.x] = 0;
//                 this.y = y
//                 this.x = x
//             }
//         } else {
//             this.die()
//         }
//     }
//     mul() {
//         var newcells = this.chooseCell(0)
//         var newCell = random(newcells);
//         if (this.energy >= 8 && newCell) {


//             var newBomb = new Bomb(newCell[0], newCell[1], this.index);

//             bombArr.push(newBomb);

//             matrix[newCell[1]][newCell[0]] = 5;

//             this.energy = 5;

//         }

//     }
//     eat() {
//         var result = this.chooseCell(3)
//         var newCell = random(result);

//         if (newCell) {
//             this.energy++
//             var x = newCell[0];
//             var y = newCell[1];
//             matrix[y][x] = 5
//             matrix[this.y][this.x] = 0;
//             this.y = y
//             this.x = x

//             for (var i in grasseaterArr) {

//                 if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {

//                     grasseaterArr.splice(i, 1)//;  grassArr.splice(i, 3);  predatorArr.splice(i, 3); 


//                     break;

//                 }

//             }
//         }
//         else {
//             this.move()
//         }
//     }

// }

//, grassArr[i].x, predatorArr[i].x && this.y == grasseaterArr[i].y , grassArr[i].y, predatorArr[i].y
//, grassArr[i].x, predatorArr[i].x && this.y == grasseaterArr[i].y , grassArr[i].y, predatorArr[i].y