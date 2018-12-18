var express = require('express');
var app = express();
server = require('http').Server(app);
var io = require('socket.io')(server);

grass = require("./grass.js");
xotaker = require("./xotaker.js");
gishatich = require("./gishatich.js");
vorsord = require("./vorsord.js");
vostikan = require("./vostikan.js");

function random(max) {
  return Math.round(Math.random() * max);
}

function getrandom(max) {
  return Math.floor(Math.random() * max);
}
matrix = getMatrix(40, 40);

function getMatrix(w, h) {
  var matrix = [];
  for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
      var r = random(100);
      if (r < 20) r = 0;
      else if (r < 65) r = 1;
      else if (r < 90) r = 2;
      else if (r < 100) r = 3;
      matrix[y][x] = r;
    }
  }
  return matrix;
}


app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);




var grassArr = [], xotakerArr = [], gishatichArr = [], vorsordArr = [], vostikanArr = [];



weather = "summer"
function changeWeather() {
  if (weather = "spring") {
    weather = "summer"
  }
  if (weather = "summer") {
    weather = "autumn"
  }
  if (weather = "autumn") {
    weather = "winter"
  }
  if (weather = "winter") {
    weather = "spring"
  }
  io.sockets.emit(weather)
}
setInterval(changeWeather, 10000)






var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vorsordArr = [];
var vostikanArr = [];



for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
      var gr = new grass(x, y)
      grassArr.push(gr)
    }
    else if (matrix[y][x] == 2) {
      var xt = new xotaker(x, y)
      xotakerArr.push(xt)
    }
    else if (matrix[y][x] == 5) {
      var vs = new vostikan(x, y)
      vostikanArr.push(vs)
    }
    else if (matrix[y][x] == 4) {
      var vr = new vorsord(x, y)
      vorsordArr.push(vr)
    }
    else if (matrix[y][x] == 3) {
      var gt = new gishatich(x, y)
      gishatichArr.push(gt)
    }
  }
}






function drawServaerayin() {


  for (var i in grassArr) {
    grassArr[i].mult()
  }


  for (var i in xotakerArr) {
    xotakerArr[i].mult();
    xotakerArr[i].move();
    xotakerArr[i].eat();
    xotakerArr[i].die();
  }

  for (var i in gishatichArr) {
    gishatichArr[i].mult();
    gishatichArr[i].move();
    gishatichArr[i].eat();
    gishatichArr[i].eat1();
    gishatichArr[i].die();
  }


  for (var i in vorsordArr) {
    vorsordArr[i].mult();
    vorsordArr[i].move();
    vorsordArr[i].eat();
    vorsordArr[i].die()

  }
  for (var i in vostikanArr) {
    vostikanArr[i].mult();
    vostikanArr[i].move();
    vostikanArr[i].eat();
    vostikanArr[i].die();

  }
  io.sockets.emit("send matrix", matrix)
}

setInterval(drawServaerayin, 1000);







