let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let idx = Math.floor(Math.random() * 3);
  return choices[idx];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() +
    playerSelection.toLowerCase().substring(1);
  let idx1 = choices.indexOf(playerSelection);
  let idx2 = choices.indexOf(computerSelection);
  let idx1Next = (idx1 + 1) % 3;
  if (idx2 == idx1Next) {
    computerScore++;
    console.log("You Lose! " + choices[idx2] + " beats " + choices[idx1]);
  } else if (idx1 == idx2) {
    console.log("Tie! " + choices[idx1] + " is same with " + choices[idx2]);
  } else {
    playerScore++;
    console.log("You win! " + choices[idx1] + " beats " + choices[idx2]);
  }
}

// const playerSelection = "rOck";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock or Paper or Scissor? ");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore == computerScore) {
    console.log("Tie!");
  } else {
    console.log("Computer wins!");
  }
}

// game();



