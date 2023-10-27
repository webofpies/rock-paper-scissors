"use strict";

function playRound(playerSelection, computerSelection) {
  let playerScore;
  let computerScore;

  const playerSpan = document.querySelector(".player-score");
  const computerSpan = document.querySelector(".computer-score");
  const winnerSpace = document.querySelector(".winner");

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    !(
      (playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors") &&
      (computerSelection === "rock" ||
        computerSelection === "paper" ||
        computerSelection === "scissors")
    )
  )
    return console.log("select one of rock paper or scissors");

  let message;

  if (playerSelection === computerSelection) {
    message = -1;
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        message = 0;
      } else {
        message = 1;
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        message = 1;
      } else {
        message = 0;
      }
    } else {
      if (computerSelection === "rock") {
        message = 1;
      } else {
        message = 0;
      }
    }
  }

  if (message === 1) {
    playerScore = 1 + Number(playerSpan.textContent);
    playerSpan.textContent = playerScore;
  }
  if (message === 0) {
    computerScore = 1 + Number(computerSpan.textContent);
    computerSpan.textContent = computerScore;
  }

  if (playerScore === 10) {
    winnerSpace.textContent = "PLAYER WINS!";
  } else if (computerScore === 10) {
    winnerSpace.textContent = "COMPUTER WINS!";
  }

  return message;
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  return playRound("rock", computerSelection);
});
paperBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  return playRound("paper", computerSelection);
});
scissorsBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  return playRound("scissors", computerSelection);
});
