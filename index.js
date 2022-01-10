function playRound(playerSelection, computerSelection, outcomeText) {
    let battleResult = playerSelection - computerSelection;
    let result= new Object();
    
    switch (battleResult) {
        case 0:
            result.message = `Tie! You Both Chose ${capitalizeFirstLetter(outcomeText[playerSelection].choice)}`
            result.playerScore = 0;
            result.computerScore = 0;
            break;
        case 1:
        case -2:
            result.message = `You Win! Your ${capitalizeFirstLetter(outcomeText[playerSelection].choice)} ${outcomeText[playerSelection].win} the Computer's ${capitalizeFirstLetter(outcomeText[computerSelection].choice)}`;
            result.playerScore = 1;
            result.computerScore = 0;
            break;
        case -1:
        case 2:
            result.message = `You Lose! Your ${capitalizeFirstLetter(outcomeText[playerSelection].choice)} ${outcomeText[playerSelection].loss} the Computer's ${capitalizeFirstLetter(outcomeText[computerSelection].choice)}`;
            result.playerScore = 0;
            result.computerScore = 1;
            break;
    }
    return result;
}

const outcome = ['You Lose!', 'You Win'];

const outcomeText = [
    { choice: "rock", loss: "gets Covered by", win: "Smashes" },
    { choice: "paper", loss: "gets Cut by", win: "Covers" },
    { choice: "scissors", loss: "gets Smashed by", win: "Cuts" },
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

let playerInput = "waiting";
while (playerInput || playerInput === true ) {
    let score = {player:0, computer:0};
        for (let i = 0; i < 5; i++) {
            const computerSelection = () => Math.floor(Math.random() * 3);            // console.log(computerSelection());
            playerInput = prompt("What's your sign?");
            console.log(playerInput);
            if (playerInput === null) {
                alert("Leaving so soon?")
                break;
            }
            const playerSelection = 0;
            const fight = playRound(playerSelection, computerSelection(),outcomeText);
            score.player += fight.playerScore;
            score.computer += fight.computerScore;
            console.log(`Round ${i + 1} reults:`)
            console.log(fight.message);
            console.log(score);
        }
    playerInput = confirm("Let's Play Again!");
    
}