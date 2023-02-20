
var socket = io();

function handleMatrix(matrix){
    console.log(matrix);
    
}
socket.on('send matrix', handleMatrix);
// function generateMatrix(length, gr, grEa, pre, ga, bo, ma ) {
//     let matrix = [];

//     for (let i = 0; i < length; i++) {
//         matrix.push([]);

//         for (let j = 0; j < length; j++) {
//             matrix[i].push(0);
//         }
//     }

//     for (let p = 0; p < gr; p++) {
//         let x = Math.floor(Math.random() * length);
//         let y = Math.floor(Math.random() * length);
//         if (matrix[y][x] == 0) {
//             matrix[x][y] = 1;
//         }
//     }
//     for (let o = 0; o < grEa; o++) {
//         let x = Math.floor(Math.random() * length);
//         let y = Math.floor(Math.random() * length);
//         if (matrix[y][x] == 0) {
//             matrix[x][y] = 2;
//         }
//     }
//     for (let c = 0; c < pre; c++) {
//         let x = Math.floor(Math.random() * length);
//         let y = Math.floor(Math.random() * length);
//         if (matrix[y][x] == 0) {
//             matrix[x][y] = 3;
//         }
//     }
//     for (let a = 0; a < ga; a++) {
//         let x = Math.floor(Math.random() * length);
//         let y = Math.floor(Math.random() * length);
//         if (matrix[y][x] == 0) {
//             matrix[x][y] = 4;
//         }
//     }
   ///// // for (let b = 0; b < bo; b++) {
    //     let x = Math.floor(Math.random() * length);
    //     let y = Math.floor(Math.random() * length);
    //     if (matrix[y][x] == 0) {
    //         matrix[x][y] = 5;
    //     }
    //////// }
    // for (let l = 0; l < ma; l++) {
    //     let x = Math.floor(Math.random() * length);
    //     let y = Math.floor(Math.random() * length);
    //     if (matrix[y][x] == 0) {
    //         matrix[x][y] = 6;
    //     }
    // }

    // return matrix;


// }
// var grassArr = [];
// var grasseaterArr = [];
// var predatorArr = [];
// var jurArr = [];
// var bombArr = [];
// var mardArr = [];
// var side = 120;
// let matrix = generateMatrix(10, 10, 18, 4, 30, 10, 2);
// function setup() {
//     frameRate(10);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background("#acacac");

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 let gr = new Grass(x, y);
//                 grassArr.push(gr);
//             } else if (matrix[y][x] == 2) {
//                 let grE = new Grasseater(x, y);
//                 grasseaterArr.push(grE);
//             }
//             else if (matrix[y][x] == 3) {
//                 let pre = new Predator(x, y);
//                 predatorArr.push(pre);
//             }
//             else if (matrix[y][x] == 4) {
//                 let ga = new Jur(x, y);
//                 jurArr.push(ga);
//             }
            //// else if (matrix[y][x] == 5) {
           // //     let bo = new Bomb(x, y);
            ////     bombArr.push(bo);
            //// }
//             else if (matrix[y][x] == 6) {
//                 let ma = new Mard(x, y);
//                 mardArr.push(ma);
//         }
//     }

// }}

// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }

//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");

//             } else if (matrix[y][x] == 2) {
//                 fill("yellow");
//             } else if (matrix[y][x] == 3) {
//                 fill("red");
//             } else if (matrix[y][x] == 4) {
//                 fill("blue");
        //    } //  else if (matrix[y][x] == 5) {
            //     fill("black");
           //////// // }
    //         else if (matrix[y][x] == 6) {
    //             fill("purple");
    //         }


    //         rect(x * side, y * side, side, side);

    //     }
    // }
    // for (var i in grassArr) {

    //     grassArr[i].mul();


    // } for (let i in grasseaterArr) {
    //     grasseaterArr[i].eat();
    // }
    // for (let i in grasseaterArr) {
    //    grasseaterArr[i].mul();
    // }
    // for (let i in predatorArr) {
    //     predatorArr[i].mul();
    // }
    // for (let i in predatorArr) {
    //     predatorArr[i].eat();
    // }
    // for (let i in jurArr) {
    //     jurArr[i].mul();
    // } for (var i in grassArr) {
    //     grassArr[i].eat();
    // }
    // for (var i in jurArr) {
    //     jurArr[i].golorshacum();
    // }
    // for(var i in jurArr) {
    //     jurArr[i].mul()
    // }
   ///// // for(var i in bombArr) {
    //     bombArr[i].mul()
    //  } for(var i in bombArr) {
    //     bombArr[i].eat()
   ///// //  } 
    // for (let i in mardArr) {
    //     mardArr[i].mul();
    // } for (let i in mardArr) {
    //      mardArr[i].eat();
    // }
   ///// // for (let i in mardArr) {
    //     mardArr[i].chash();
    // }
    // for (let i in mardArr) {
    //     mardArr[i].yntriq();
    // }
    // for (let i in predatorArr) {
   /////// //     predatorArr[i].eat1();
   // // }
   //}

