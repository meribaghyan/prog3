
var express = require("express");

var app = express();

app.use(express.static("mymodules"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Example is running on port 3000");

});

ServiceWorkerRegistration.listen(3000);
matrix = [];
matrix = [1, 1, 1]
io.on('connection', function (socket) {

    for(var i in messages) {
    
    socket.emit("display message", messages[i]);
    
    }
    
    // socket.on("send message", function (data) {
    
    // messages.push(data);
    
    // io.sockets.emit("display message", data);
    
    // });
    
    });
// var grassArr = [];
// var grasseaterArr = [];
// var predatorArr = [];
// var jurArr = [];
// var bombArr = [];
// var mardArr = [];