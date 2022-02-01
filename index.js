/**
 * @name playRound
 * @description Plays a round of Rock, Paper, Scissors against the computer
 * @param {number} playerSelection
 * @param {number} computerSelection
 * @param {object} outcomeText
 *
 * @returns {object} result
 */
function playRound(playerSelection, computerSelection, outcomeText) {
    let battleResult = playerSelection - computerSelection;
    let result = new Object();

    switch (battleResult) {
        case 0:
            result.message = `Tie!`;
            result.playerScore = 0;
            result.computerScore = 0;
            break;
        case 1:
        case -2:
            result.message = `You Win!`
            result.playerScore = 1;
            result.computerScore = 0;
            break;
        case -1:
        case 2:
            result.message = `You Lose!`
            result.playerScore = 0;
            result.computerScore = 1;
            break;
    }
    return result;
}

/**
 * @name capitalizeFirstLetter
 * @description Capitalizes the first letter of a  word
 * @param {string} string
 *
 * @returns {string} result
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const outcome = ["You Lose!", "You Win"];

const outcomeText = [
    { choice: "rock", loss: "gets Covered by", win: "Smashes", symbol: "✊" },
    { choice: "paper", loss: "gets Cut by", win: "Covers", symbol: "✋" },
    { choice: "scissors", loss: "gets Smashed by", win: "Cuts", symbol: "✌" },
];

// Initialise plaerInput
let playerInput = "waiting";
let i = 1;

function handleClick(playerSelection) {
    if (foundWinner(score)) {
        openGameOverModal()
        return
    }

    const computerSelection = Math.floor(Math.random() * 3);
    const fight = playRound(playerSelection, computerSelection, outcomeText);

    score.player += fight.playerScore;
    score.computer += fight.computerScore;
    playerChoice[0].innerText = outcomeText[playerSelection].symbol;
    computerChoice[0].innerText = outcomeText[computerSelection].symbol;
    playerScore[0].innerText = score.player;
    computerScore[0].innerText = score.computer;
    playerInfo[0].innerText = fight.message;
    gameState[0].innerText = `Round ${i}`;
    i += 1

    if (foundWinner(score)) {
        openGameOverModal()
        setFinalMessage(score)
        i = 1;
        return;
    }
}

function foundWinner(score) {
    return score.player === 5 || score.computer === 5;
}

function openGameOverModal() {
    endgameModal.classList.add("active");
    overlay.classList.add("active");
}

function closeGameOverModal() {
    endgameModal.classList.remove("active");
    overlay.classList.remove("active");
    playerInfo[0].innerText = `Choose your Weapon`
    gameState[0].innerText = `Ready Player One!`
}

function setFinalMessage(score) {
    return score.player > score.computer
        ? (endgameMsg.innerText = "You won!")
        : (endgameMsg.innerText = "You lost...");
}

function restartGame() {
    score = { player: 0, computer: 0 };
    playerChoice[0].innerText = "❔";
    computerChoice[0].innerText = "❔";
    playerScore[0].innerText = score.player;
    computerScore[0].innerText = score.computer;
    endgameModal.classList.remove("active");
    overlay.classList.remove("active");
}

let score = { player: 0, computer: 0 };

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playerChoice = document.getElementsByClassName("playerChoice");
const computerChoice = document.getElementsByClassName("computerChoice");
const playerScore = document.getElementsByClassName("playerScore");
const computerScore = document.getElementsByClassName("computerScore");
const endgameModal = document.getElementById('endgameModal')
const overlay = document.getElementById('overlay')
const endgameMsg = document.getElementById('endgameMsg')
const restartBtn = document.getElementById('restartBtn')
const gameState = document.getElementsByClassName('gameState')
const playerInfo = document.getElementsByClassName('playerInfo')

rockBtn.addEventListener("click", () => handleClick(0));
paperBtn.addEventListener("click", () => handleClick(1));
scissorsBtn.addEventListener("click", () => handleClick(2));

restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeGameOverModal)
