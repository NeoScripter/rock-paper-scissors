/* 
const moves = ['rock', 'paper', 'scissors'];

function getComputerChoice(moves) {
    const choice = Math.floor(Math.random() * 3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionLowercase = playerSelection.toLowerCase();
    if (playerSelectionLowercase === computerSelection) {
        return "It's a tie!";
    } else if (playerSelectionLowercase === 'rock') {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelectionLowercase === 'paper') {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beat Paper";
        }
    } else if (playerSelectionLowercase === 'scissors') {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beat Paper";
        }
    } else {
        return "Enter the correctly spelled move";
    }
  
}

function playGame(moves, playerSelection) {
    const computerSelection = getComputerChoice(moves);
    return playRound(playerSelection, computerSelection);
} */

/* let input = prompt("Choose your move");
alert(`${playGame(moves, input)}`); */

const exitRules = document.querySelector(".exit-rules");
const openRules = document.querySelector(".check-rules");
const rulesWindow = document.getElementById("rules");

exitRules.addEventListener("click", () => {
    rulesWindow.style.display = "none";
});

openRules.addEventListener("click", () => {
    rulesWindow.style.display = "flex";
});