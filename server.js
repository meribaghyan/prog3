


// Jur = require('./mymodules/jur.js')
// Grass = require('./mymodules/toxlinigrass.js')
// Predator = require('./mymodules/predator.js')
// Mard = require('./mymodules/mard.js')
// Grasseater = require('./mymodules/grasseater.js')

const express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");
app.use(express.static("mymodules"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
stat = {
    grasseater: 0,
    grass: 0,
    predator: 0,
    jur: 0,
    mard: 0,
}
matrix = [];
grassArr = [];
grasseaterArr = [];
predatorArr = [];
jurArr = [];
//var bombArr = [];
var mardArr = [];
const LivingCreature = require('./mymodules/LivingCreature');//consty
Jur = require('./mymodules/jur.js')
Grass = require('./mymodules/toxlinigrass.js')
Predator = require('./mymodules/predator.js')
Mard = require('./mymodules/mard.js')
Grasseater = require('./mymodules/grasseater.js')


// io.on('connection', function (socket) {
//     createObject(matrix);
//     //game(matrix)

//     socket.emit("send matrix", matrix);
//     socket.emit("send grassArr", grassArr);
//     socket.emit("send grasseaterArr", grasseaterArr);
//     socket.emit("send mardArr", mardArr);
//     socket.emit("send predatorArr", predatorArr);
//     socket.emit("send jurArr", jurArr);
//     socket.emit("send LivingCreature", LivingCreature);

// });

function generateMatrix(length, gr, grEa, pre, ga, bo, ma) {
    let matrix = [];

    for (let i = 0; i < length; i++) {
        matrix.push([]);

        for (let j = 0; j < length; j++) {
            matrix[i].push(0);
        }
    }

    for (let p = 0; p < gr; p++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let o = 0; o < grEa; o++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let c = 0; c < pre; c++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let a = 0; a < ga; a++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    /// // for (let b = 0; b < bo; b++) {
    // let x = Math.floor(Math.random() * length);
    // let y = Math.floor(Math.random() * length);
    // if (matrix[y][x] == 0) {
    //     matrix[x][y] = 5;
    // }
    ////// }
    for (let l = 0; l < ma; l++) {
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 6;
        }
    }

    return matrix;

}

matrix = generateMatrix(10, 10, 18, 4, 30, 10, 2);




function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                let grE = new Grasseater(x, y);
                grasseaterArr.push(grE);
            }
            else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                let ga = new Jur(x, y);
                jurArr.push(ga);
            }
            // else if (matrix[y][x] == 5) {
            //     let bo = new Bomb(x, y);
            //     bombArr.push(bo);
            // }
            else if (matrix[y][x] == 6) {
                let ma = new Mard(x, y);
                mardArr.push(ma);
            }
        }

    }
}



function game() {
    for (var i in grassArr) {

        grassArr[i].mul();


    } stat.grass = i;

    for (let i in grasseaterArr) {
        grasseaterArr[i].eat();

    }
    for (let i in grasseaterArr) {
        grasseaterArr[i].mul();
    }  stat.grasseater = i;
    for (let i in predatorArr) {
        predatorArr[i].mul();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat();
    } stat.predator = i;
    
    for (var i in grassArr) {
        grassArr[i].eat();
    }stat.grass = i;
    for (let i in jurArr) {
        jurArr[i].mul();
    } 
    for (var i in jurArr) {
        jurArr[i].golorshacum();
    }
    for (var i in jurArr) {
        jurArr[i].mul()
    }stat.jur = i;
    /// // for(var i in bombArr) {
    //     bombArr[i].mul()
    //  } for(var i in bombArr) {
    //     bombArr[i].eat()
    /// //  } 
    for (let i in mardArr) {
        mardArr[i].mul();
    
    }
     for (let i in mardArr) {
        mardArr[i].eat();
    }stat.mard = i;
    /// // for (let i in mardArr) {
    //   mardArr[i].chash();
    //}
    //for (let i in mardArr) {
    // mardArr[i].yntriq();
    //}
    //for (let i in predatorArr) {
    ///// //     predatorArr[i].eat1();
    // }
    io.sockets.emit('send matrix', info);
    io.sockets.emit('grasseater', stat);
}
setInterval(game, 250)

info = {
    matrix: matrix,
    weather: "amar",
}
function hiver(winter) {
    info.weather = "dzmer";
    for (var i in grassArr) {
        grassArr[i].mulTime = 14;
      }
    io.sockets.emit("send weather", info);
}
function ete() {
    info.weather = "amar";
    for (var i in grasseaterArr) {
        grasseaterArr[i].mulTime = 6;
      }
    io.sockets.emit("send weather", info);
}

function aut() {
    info.weather = "ashun";
    for (var i in predatorArr) {
        predatorArr[i].mulTime = 5;
      }
    io.sockets.emit("send weather", info);
}
function Clear() {
    grassArr = [];
    grasseaterArr = [];
    predatorArr = [];
    mardArr = [];
    jurArr = [];


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }  
    io.sockets.emit("ffff", matrix);
}
io.on("connection", function (socket) {
    createObject();
    socket.on("wint", hiver);
    socket.on("sum", ete);

    socket.on("aut", aut);   
    socket.on("clear", Clear);

});

// io.on('connection', function (socket) {
//     createObject(matrix);
//     //game(matrix)

//     socket.emit("send matrix", matrix);
//     socket.emit("send grassArr", grassArr);
//     socket.emit("send grasseaterArr", grasseaterArr);
//     socket.emit("send mardArr", mardArr);
//     socket.emit("send predatorArr", predatorArr);
//     socket.emit("send jurArr", jurArr);
//     socket.emit("send LivingCreature", LivingCreature);

// });