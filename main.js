const FileSaver = require('file-saver');

var player1;
var player2;
var epic;
var moveCounter;
function smallBrain() {
    player1 = document.getElementById("input1").value;
    document.getElementById("notitle").innerHTML = player1;
}

function beeegBrain() {
    player2 = document.getElementById("input2").value;
    document.getElementById("yestitle").innerHTML = player2
    epic = player1+" vs "+player2;
    document.getElementById("output").innerHTML = epic;
}

function notation() {
    var moveinput = document.getElementById("inputnot").value;
    if (player1 != null && player2 != null) {
        epic = epic + "\n" + moveinput;
        document.getElementById("inputnot").innerHTML = "";
        document.getElementById("output").innerHTML = epic;
    } else {
        document.getElementById("inputnot").disabled;
    }
}
