var rock = document.getElementById("pedra!"),
    paper = document.getElementById("papel!"),
    scissors = document.getElementById("tesoura!")

function Vitoria() {
 var popup = document.getElementById("vitoria");
 popup("show");
}
function Derrota() {

}
function Empate() {

}
var compare = function (arma) {

    var computer = [1, 2, 3];
    var random = computer[Math.floor(Math.random() * computer.length)];

    if (random == 1) {
        computer = "Pedra";
    }
    else if (random == 2) {
        computer = "Papel";
    }
    else (random == 3)
    computer = "Tesoura";
}

if (arma == "pedra!") {
    if (computer == "Pedra") {
        Empate();

    } else if (computer == "Papel") {
        Derrota();

    } else if (computer == "Tesoura") {
        Vitoria();

    }
}
if (arma == "papel!") {
    if (computer == "Pedra") {
        Vitoria();

    } else if (computer == "Papel") {
        Empate();

    } else if (computer == "Tesoura") {
        Derrota();
    }
}
if (arma == "tesoura!") {
    if (computer == "Pedra") {
        Derrota();

    } else if (computer == "Papel") {
        Vitoria();

    } else if (computer == "Tesoura") {
        Empate();
    }
}