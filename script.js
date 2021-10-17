function computerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "rock" : generator === 1 ? "scissors" : "paper";
  }
}

// Placeholder for testing
function playerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "rock" : generator === 1 ? "scissors" : "paper";
  }
}

// Below add in final version 

// function userInput() {
//   const input = prompt(`Rock, Paper, Scissors?`);
//   return input;
// }

// onload = function () {
//   userInput();
// };

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection == "paper"
  )
    return `You win! Scissors beats paper!`;
  else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection === "rock"
  )
    return `You win! Paper beats rock!`;
  else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection === "scissors"
  )
    return `You win! Rock beats scissors!`;
  else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  )
    return `You lose! Scissors beats paper!`;
  else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  )
    return `You Lose! Paper beats rock!`;
  else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  )
    return `You lose! Rock beats scissors!`;
  else return "It's a tie!";
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// function game(playerSelection, computerSelection) {
//   const userScore = 0;
//   const compScore = 0;
//   const rounds = 0;
//   for (let i = 0; i < 5; i++) {
//
//}
// }
