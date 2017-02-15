var colors = ["#1abc9c","#2ecc71","#16a085","#27ae60","#3498db","#2980b9","#9b59b6","#8e44ad","#f1c40f","#f39c12","#e67e22","#e74c3c","#2c3e50"];

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.addEventListener("click", createRectangle);

var button = document.getElementById("clear");
button.addEventListener("click", clearCanvas(ctx));

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
canvas2.addEventListener("click", createPath);

var button2 = document.getElementById('clear2');
button2.addEventListener("click", clearCanvas(ctx2));

function createRectangle(e) {
    var canvX = e.offsetX;
    var canvY = e.offsetY;

    var rectWidth = Math.round(40 + Math.random()*110);
    var rectHeight = Math.round(40 + Math.random()*110);

    ctx.fillStyle = randColor();
    ctx.fillRect(canvX-rectWidth/2, canvY-rectHeight/2, rectWidth, rectHeight);
}

function randColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}

function createPath(e) {
    var canvX = e.offsetX;
    var canvY = e.offsetY;
    console.log(canvX, canvY);

    ctx2.arc(canvX, canvY, 20, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.moveTo(canvX, canvY);
    ctx2.fillStyle = "#FF0000";
    ctx2.fill();
}

function clearCanvas(context) {
    return function() {
        context.clearRect(0, 0, 700, 500);
	context.beginPath();
    }
}
