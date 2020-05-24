var active = false;
var animation;

function obtainColor() {
    const letters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    var color = "#";

    while(color.length < 7) {
        var index =  Math.floor(Math.random() * 16);
        color += letters[index];
    }
    return color;
}

function startDisco() {
    // Rectangles stack on top of each other because of lines 18 and 19?
    var canvas = document.getElementById("whiteBoard");
    var canvasContext = canvas.getContext("2d");

    var verPos = Math.floor((Math.random() * 399) + 1);
    var currentcolor = obtainColor();

    // canvasContext.lineWidth = 10;
    canvasContext.lineWidth = Math.floor((Math.random() * 391) + 1);
    canvasContext.lineCap = "butt";
    canvasContext.moveTo(5, 200); // 200 is the middle of the canvas. For a different effect, set the line width, comment random lineWidth, and use verPos.
    canvasContext.lineTo(395, 200);
    canvasContext.strokeStyle = currentcolor;
    canvasContext.stroke();
}

document.getElementById("discoStart").onclick = function() {
    if(active == false) {
        animation = setInterval(() => {startDisco();}, 250);
        active = true;
        console.log("var is true");
    } else {
        alert("Running already");
        console.log("var is false");
    }
}

document.getElementById("discoStop").onclick = function() {
    active = false;
    clearInterval(animation);
}
