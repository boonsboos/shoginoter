const FileSaver = require('file-saver');

var player1;
var player2;
var epic;
var moveCounter = 1;

function goteSente() {
    var gosen = Math.random();

    if (gosen > 0.5) {
        player1 = player1 + " (Sente)";
        player2 = player2 + " (Gote)";
        document.getElementById("notitle").innerHTML = player1
        document.getElementById("yestitle").innerHTML = player2
        document.getElementById("p2btn").disabled;
    } else if (gosen <= 0.5) {
        player2 = player2 + " (Sente)";
        player1 = player1 + " (Gote)";
        document.getElementById("notitle").innerHTML = player1
        document.getElementById("yestitle").innerHTML = player2
        document.getElementById("p2btn").disabled;
    }
}

function smallBrain() {
    player1 = document.getElementById("input1").value;
    document.getElementById("notitle").innerHTML = player1;
}

function beeegBrain() {
    player2 = document.getElementById("input2").value;
    if (player2!=null) {
        goteSente();
        epic = player1+" vs "+player2;
        document.getElementById("output").innerHTML = epic;
        document.getElementById("p2btn").disabled;
    } else {
        alert("sadge")
    }
}

function notation() {
    if (player1 != null && player2 != null) {
        generateNotation();
        document.getElementById("coords").innerHTML = " ";
        document.getElementById("output").innerHTML = epic;
    }
}

function generateNotation() {
    var move;
    var pieces = document.getElementById("pieceselect");
    var actions = document.getElementById("actionselect");

    if (document.getElementById("posprom").checked == true && document.getElementById("doneprom").checked == true) {
        move = pieces.options[pieces.selectedIndex].value + actions.options[actions.selectedIndex].value + document.getElementById("coords").value + "+";
    } else if (document.getElementById("posprom").checked == true && document.getElementById("doneprom").checked == false) {
        move = pieces.options[pieces.selectedIndex].value + actions.options[actions.selectedIndex].value +  document.getElementById("coords").value + "=";
    } else {
        move = pieces.options[pieces.selectedIndex].value + actions.options[actions.selectedIndex].value +  document.getElementById("coords").value;
    }
    epic = epic + "\n" + move;
}

function download() {
    var date = Date();
    player1 = player1.replace(/(Go|Sen)te\b/, "");
    player2 = player2.replace(/(Go|Sen)te\b/, "");
    FileSaver.saveAs(epic, player1+"_"+player2+"-"+date+".txt");
}