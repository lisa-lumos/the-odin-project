let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let resultFinal;

buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((object) => (object.addEventListener("click", playRound)));

function getComputerChoice() {
  let idx = Math.floor(Math.random() * 3);
  return choices[idx];
}

function playRound() {
  let playerSelection = this.textContent;
  // console.log(this.textContent);
  let computerSelection = getComputerChoice();
  let idx1 = choices.indexOf(playerSelection);
  let idx2 = choices.indexOf(computerSelection);
  let idx1Next = (idx1 + 1) % 3;
  roundNumber++;
  let resultString = `Round ${roundNumber}/5: `;

  if (idx2 == idx1Next) {
    computerScore++;
    resultString = resultString + "You Lose! " + choices[idx2] + " beats " + choices[idx1];
  } else if (idx1 == idx2) {
    resultString = resultString + "Tie! " + choices[idx1] + " is same with " + choices[idx2];
    computerScore += 0.5;
    playerScore += 0.5;
  } else {
    playerScore++;
    resultString = resultString + "You win! " + choices[idx1] + " beats " + choices[idx2];
  }
  let score = `Your score: ${playerScore}, computer score: ${computerScore}`;

  document.querySelector("#result").textContent = resultString;
  document.querySelector("#score").textContent = score;
  if (roundNumber == 1) {
    document.querySelector("#final-result").textContent = resultFinal;
  }
  if (roundNumber >= 5) {
    if (playerScore > computerScore) {
      resultFinal = "Final result: Player wins!";
    } else if (playerScore == computerScore) {
      resultFinal = "Final result: Tie!";
    } else {
      resultFinal = "Final result: Computer wins!";
    }
    document.querySelector("#final-result").textContent = resultFinal;
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  resultFinal = "";
}



