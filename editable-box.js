document.getElementById("startButton").onclick = function() {
    startEdit();
}

document.getElementById("stopButton").onclick = function() {
    stopEdit();
}

function startEdit() {
    var paragraph = document.getElementById("editableElement");
    paragraph.contentEditable = true;
    paragraph.focus();
}

function stopEdit() {
    var paragraph = document.getElementById("editableElement");
    paragraph.contentEditable = false;
    alert("This is what you wrote: " + paragraph.innerHTML);
}