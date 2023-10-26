function playRound(playerSelection, computerSelection) {
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

  return message;
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}

// console.log(playRound(playerSelection, computerSelection));

function game(count) {
  let playerScores = [];
  let computerScores = [];
  let message = "";

  for (let i = 0; i < count; i++) {
    let playerSelection = prompt();
    let computerSelection = getComputerChoice();
    // console.log(computerSelection);
    // console.log(playerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === 1) {
      playerScores.push(result);
    } else if (result === 0) {
      computerScores.push(result);
    }
  }

  if (playerScores.length === computerScores.length) {
    message = "It's a DRAW";
  } else if (playerScores.length > computerScores.length) {
    message = "Player WINS!";
  } else {
    message = "Computer WINS!";
  }

  console.log(playerScores);
  console.log(computerScores);
  console.log(message);
}

game(10);
