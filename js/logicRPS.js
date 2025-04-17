let numWon = 0;
let numLoss = 0;
let numTies = 0;
let numGames  = 0;

function runGame(x) {

    let pick = x;

    let randNum = Math.floor(Math.random() * 3 + 1);

    let choice;

    if (randNum == 1) {
        choice = 'rock';
    } else if (randNum == 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    };

    let status;

    if (pick === 'rock' && choice === 'rock') {
        status = "tie";
        numTies++;
    } else if (pick === 'rock' && choice === 'paper') {
        status = "loss";
        numLoss++;
    } else if (pick === 'rock' && choice === 'scissors') {
        status = "win";
        numWon++;
    } else if (pick === 'paper' && choice === 'rock') {
        status = "win";
        numWon++;
    } else if (pick === 'paper' && choice === 'paper') {
        status = "tie";
        numTies++;
    } else if (pick === 'paper' && choice === 'scissors') {
        status = "loss";
        numLoss++;
    } else if (pick === 'scissors' && choice === 'rock') {
        status = "loss";
        numLoss++;
    } else if (pick === 'scissors' && choice === 'paper') {
        status = "win";
        numWon++;
    } else {
        status = "tie";
        numTies++;
    }

    numGames++;

    let prediction = document.getElementById('prediction');
    prediction.innerText = pick;

    let compChoice = document.getElementById('compChoice');
    compChoice.innerText = choice;

    let result = document.getElementById('result');
    result.innerText = status;

    let count = document.getElementById('count');
    count.innerText = numGames;

    let wins = document.getElementById('wins');
    wins.innerText = numWon;

    let losses = document.getElementById('losses');
    losses.innerText = numLoss;

    let ties = document.getElementById('ties');
    ties.innerText = numTies;
}

function resetScore() {
    let numWon = 0;
    let numLoss = 0;
    let numTies = 0;
    let numGames  = 0;

    let count = document.getElementById('count');
    count.innerText = numGames;

    let wins = document.getElementById('wins');
    wins.innerText = numWon;

    let losses = document.getElementById('losses');
    losses.innerText = numLoss;

    let ties = document.getElementById('ties');
    ties.innerText = numTies;
}