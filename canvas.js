var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var colors = ["#1abc9c","#2ecc71","#16a085","#27ae60","#3498db","#2980b9","#9b59b6","#8e44ad","#f1c40f","#f39c12","#e67e22","#e74c3c","#2c3e50"];
canvas.addEventListener("click", createRectangle);

var button = document.getElementById("clear");
button.addEventListener("click", clearCanvas);

function createRectangle(e) {
    var canvX = e.offsetX;
    var canvY = e.offsetY;

    var rectWidth = Math.round(40 + Math.random()*110);
    var rectHeight = Math.round(40 + Math.random()*110);

    ctx.fillStyle = randColor();
    ctx.fillRect(canvX-rectWidth/2, canvY-rectHeight/2, rectWidth, rectHeight); //place rect centered at mouse coords
}

function randColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}

function clearCanvas() {
    ctx.clearRect(0, 0, 700, 500);
}