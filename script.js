var socket = io();


function setup() {
  frameRate(5);
  createCanvas(500, 500);
  background('#acacac');

  function drawMatrix(matrix) {


    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
          fill("green");
        }
        else if (matrix[y][x] == 0) {
          fill("#acacac");
        }
        else if (matrix[y][x] == 2) {
          fill("yellow");
        }
        else if (matrix[y][x] == 3) {
          fill("red");
        }
        else if (matrix[y][x] == 4) {
          fill("aqua");
        }
        else if (matrix[y][x] == 5) {
          fill("black");
        }
        else if (weather == "summer") {
          fill("#f3ff1c")
        }
        else if (weather == "spring") {
          fill("#b3e000")
        }
        else if (weather == "autumn") {
          fill("#e88700")
        }
        else if (weather == "winter") {
          fill("#ffffff")
        }
        rect(x * side, y * side, side, side)

      }
    }
  }
}




socket.on("send matrix", drawMatrix())











// function main() {
//   var socket = io();
//   var button = document.getElementById('stop');


