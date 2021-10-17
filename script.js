// function userInput() {
//   const input = prompt(`Rock, Paper, Scissors?`);
//   return input;
// }

// onload = function () {
//   userInput();
// };

function computerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "rock" : generator === 1 ? "scissors" : "paper";
  }
}

function playerPlay() {
  // Placeholder for testing
  for (let i = 0; i < 5; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "rock" : generator === 1 ? "scissors" : "paper";
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();

function game(playerSelection, computerSelection) {
  let userScore = 0;
  let compScore = 0;
  let rounds = 0;
  for (let i = 0; i < 6; i++) {
    console.log(`Player Score: ${userScore}  Computer Score: ${compScore}`);
    console.log(`Round ${rounds}`);
    // Issue with PC choice. Doesn't dynamically generate new value. Overhaul function?
    // Seperate rock papers scissors function into separate one.
    rounds++;
    if (
      (playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "paper") ||
      (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "scissors") ||
      (playerSelection.toLowerCase() === "paper" &&
        computerSelection === "rock") ||
      (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "scissors")
    )
      ++userScore;
    else if (
      (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "scissors") ||
      (playerSelection.toLowerCase() === "paper" &&
        computerSelection === "scissors") ||
      (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "paper") ||
      (playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "rock")
    )
      ++compScore;
    // Need to add input for tie
  }
}


console.log(game(playerSelection, computerSelection));

// Left on Step 6.
// Need to do:
// function Game() partially functional. Point system bugged.
// Need to add end state.
// Remove playPlay, add back onload function for end.
