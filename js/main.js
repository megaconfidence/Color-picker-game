var colors = generateRandomColors(6);

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
for(var i = 0; i < squares.length; i++) {
  //add initail color to squares
    squares[i].style.background = colors[i];
  //add event listener to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "Correct";
      changeColor(pickedColor);
      h1.style.background = pickedColor;
     } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}