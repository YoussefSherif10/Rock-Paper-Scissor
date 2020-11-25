function rpsGame(element) {
    var myChoice, botChoice;
    myChoice = element.id;
    botChoice = numberToChoice(randomChoice());
    result = decideWinner(myChoice, botChoice);
    message = finalMessage(result);
    FrontEnd(myChoice, botChoice, message);
}

function randomChoice() {
    return Math.floor(Math.random() * 3); //returns either 0,1,2
}

function numberToChoice(number) {
    return ['rock', 'papper', 'sissor'][number];
}

function decideWinner(human, computer) {
    var rps = {
        'rock': { 'sissor': 1, 'rock': 0.5, 'papper': 0 },
        'papper': { 'rock': 1, 'papper': 0.5, 'sissor': 0 },
        'sissor': { 'papper': 1, 'sissor': 0.5, 'rock': 0 }
    };

    var yourScore = rps[human][computer];

    return yourScore;
}

function finalMessage(score) {
    var messages = {
        '0': ['You Lost!', 'red'],
        '1': ['You Won!', 'green'],
        '0.5': ['You Drawed!', 'yellow']
    };

    return messages[score];
}

function FrontEnd(myID, botID, mess) {
    var database = {
        'rock': document.getElementById('rock').src,
        'papper': document.getElementById('papper').src,
        'sissor': document.getElementById('sissor').src,
    };

    document.getElementById('rock').remove();
    document.getElementById('papper').remove();
    document.getElementById('sissor').remove();

    var mydiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    mydiv.innerHTML = "<img src='" + database[myID] + "'style='box-shadow : 0px 10px 50px blue;'>";
    botdiv.innerHTML = "<img src='" + database[botID] + "'style='box-shadow : 0px 10px 50px red;'>";
    messagediv.innerHTML = "<p style='color :" + mess[1] + "; font-size:60px ; padding:30px;'>" + mess[0] + "</p>";

    document.getElementById('flex-container-div').appendChild(mydiv);
    document.getElementById('flex-container-div').appendChild(messagediv);
    document.getElementById('flex-container-div').appendChild(botdiv);
}