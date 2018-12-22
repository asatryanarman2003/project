var socket = io();
socket = io.connect("http://localhost:3000") 
 

// function setup() {
//   frameRate(5);
//   createCanvas(matrix[0].length * side, matrix.length * side);
//   background('#acacac');
// }


socket.on("send matrix", function(matrix){  
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
  
  
  
      rect(x * side, y * side, side, side)
  if(weather == "summer"){
    fill ("#f3ff1c")
  }
  if(weather == "spring"){
    fill ("#b3e000")
  }
  if(weather == "autumn"){
    fill ("#e88700")
  }
  if(weather == "winter"){
    fill ("#ffffff")
  }
  
    }
  }
  })








  


