var socket = io();
var clear = document.getElementById("clear");//
var winter = document.getElementById("winter");
var autumn = document.getElementById("autumn");
var summer = document.getElementById("summer");
clear.addEventListener("click", Clear);
function Clear() {
    socket.emit("clear")
}
winter.addEventListener("click", foo);
function foo() {

    socket.emit("wint", winter)
}
summer.addEventListener("click", boo);
function boo() {
    socket.emit("sum", summer)
}
autumn.addEventListener("click", woo);
function woo() {
    socket.emit("aut", autumn)
}
// socket.on('send matrix', 'send weather', function (data) {
//     drawing(data)
// });
socket.on('send matrix', drawing);//
socket.on('send weather', drawing);//
// socket.on('send object', obj);

// // }
// // var grassArr = [];
// // var grasseaterArr = [];
// // var predatorArr = [];
// // var jurArr = [];
// // var bombArr = [];
// // var mardArr = []; 

// var side = 120;
// // let matrix = generateMatrix(10, 10, 18, 4, 30, 10, 2);
side = 35
function setup() {
    frameRate(5);
    createCanvas(10.05 * side, 10.05 * side);
    background("#acacac");
}
let matrix = []

// //     for (var y = 0; y < matrix.length; y++) {
// //         for (var x = 0; x < matrix[y].length; x++) {
// //             if (matrix[y][x] == 1) {
// //                 let gr = new Grass(x, y);
// //                 grassArr.push(gr);
// //             } else if (matrix[y][x] == 2) {
// //                 let grE = new Grasseater(x, y);
// //                 grasseaterArr.push(grE);
// //             }
// //             else if (matrix[y][x] == 3) {
// //                 let pre = new Predator(x, y);
// //                 predatorArr.push(pre);
// //             }
// //             else if (matrix[y][x] == 4) {
// //                 let ga = new Jur(x, y);
// //                 jurArr.push(ga);
// //             }
//             //// else if (matrix[y][x] == 5) {
//            // //     let bo = new Bomb(x, y);
//             ////     bombArr.push(bo);
//             //// }
// //             else if (matrix[y][x] == 6) {
// //                 let ma = new Mard(x, y);
// //                 mardArr.push(ma);
// //         }
// //     }

// // }}//////////////


function drawing(info) {

    for (var y = 0; y < info.matrix.length; y++) {
        for (var x = 0; x < info.matrix[y].length; x++) {
            if (info.matrix[y][x] == 1) {
                if (info.weather == "dzmer") {
                    fill("#d9dede");
                } else if (info.weather == "amar") {
                    fill("green");
                } else if (info.weather == "ashun") {
                    fill("brown");
                }


            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");

            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            } else if (matrix[y][x] == 4) {
                fill("blue");
            } //  else if (matrix[y][x] == 5) {
            // fill("black");
            ////// // }
            else if (matrix[y][x] == 6) {
                fill("purple");
            }


            rect(x * side, y * side, side, side);

        }
    }
}
socket.on("grasseater", statistics);
function statistics(stat) {
    document.getElementById("grass").innerHTML = stat.grass;
    document.getElementById("grasseater").innerHTML = stat.grasseater;
    document.getElementById("predator").innerHTML = stat.predator;
    document.getElementById("mard").innerHTML = stat.mard;
    document.getElementById("jur").innerHTML = stat.jur;
}



//     for (var i in grassArr) {

//         grassArr[i].mul();


//     } for (let i in grasseaterArr) {
//         grasseaterArr[i].eat();
//     }
//     for (let i in grasseaterArr) {
//        grasseaterArr[i].mul();
//     }
//     for (let i in predatorArr) {
//         predatorArr[i].mul();
//     }
//     for (let i in predatorArr) {
//         predatorArr[i].eat();
//     }
//     for (let i in jurArr) {
//         jurArr[i].mul();
//     } for (var i in grassArr) {
//         grassArr[i].eat();
//     }
//     for (var i in jurArr) {
//         jurArr[i].golorshacum();
//     }
//     for(var i in jurArr) {
//         jurArr[i].mul()
//     }
//    /// // for(var i in bombArr) {
//     //     bombArr[i].mul()
//     //  } for(var i in bombArr) {
//     //     bombArr[i].eat()
//    /// //  }
//     for (let i in mardArr) {
//         mardArr[i].mul();
//     } for (let i in mardArr) {
//          mardArr[i].eat();
//     }
//    /// // for (let i in mardArr) {
//      //   mardArr[i].chash();
//     //}
//     //for (let i in mardArr) {
//        // mardArr[i].yntriq();
//     //}
//     //for (let i in predatorArr) {
//    ///// //     predatorArr[i].eat1();
//    // }

