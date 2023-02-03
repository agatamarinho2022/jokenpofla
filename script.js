var playerch = 0;
    playerpoint = 0;
    pcch = 0;
    pcpoint = 0;
    winner = -1;

function jogar(escolha) {
    playerch = escolha;

    pcch = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
    // 1 pedra
    // 2 papel 
    // 3 tesoura
    if ((playerch == 1) && (pcch == 1)) {
        winner = 0;
    }
    else if ((playerch == 1) && (pcch == 2)) {
        winner = 2;
    }
    else if ((playerch == 1) && (pcch == 3)) {
        winner = 1;
    }
    else if ((playerch == 2) && (pcch == 1)) {
        winner = 1;
    }
    else if ((playerch == 2) && (pcch == 2)) {
        winner = 0;
    }
    else if ((playerch == 2) && (pcch == 3)) {
        winner = 2;
    }
    else if ((playerch == 3) && (pcch == 1)) {
        winner = 2;
    }
    else if ((playerch == 3) && (pcch == 2)) {
        winner = 1;
    }
    else if ((playerch == 3) && (pcch == 3)) {
        winner = 0;
    }

    document.getElementById("playerchoose2").classList.remove('selected');
    document.getElementById("playerchoose1").classList.remove('selected');
    document.getElementById("playerchoose3").classList.remove('selected');

    document.getElementById("pcchoose1").classList.remove('selected');
    document.getElementById("pcchoose2").classList.remove('selected');
    document.getElementById("pcchoose3").classList.remove('selected');


    document.getElementById("playerchoose" + playerch).classList.add('selected');
    document.getElementById("pcchoose" + pcch).classList.add('selected');

    if (winner == 0) {
        document.getElementById('mensagem').innerHTML = 'Empate';
    }
    else if (winner == 1) {
        document.getElementById('mensagem').innerHTML = 'Jogador ganhou';
        playerpoint++;
    }
    else if (winner == 2) {
        document.getElementById('mensagem').innerHTML = 'Computador ganhou';
        pcpoint++;
    }
    document.getElementById('playerpoints').innerHTML = playerpoint;
    document.getElementById('pcpoints').innerHTML = pcpoint;
    
}
