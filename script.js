let userScore = 0;
let compScore = 0;
let rounds = 0;

function computerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "rock" : generator === 1 ? "scissors" : "paper";
  }
}

function playRound() {
  let playerSelection = prompt(`Rock, Paper, Scissors?`);
  let computerSelection = computerPlay();
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
    return userScore++;
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
    return compScore++;
  else console.log("It's a tie!");
}

function game() {
  for (let i = 0; i < 6; i++) {
    console.log(`Player Score: ${userScore}  Computer Score: ${compScore}`);
    console.log(`Round ${rounds}`);
    playRound();
    rounds++;
    if (i === 5) endScore();
  }
}

function endScore() {
  if (userScore > compScore) return console.log("You won!");
  else if (userScore < compScore) return console.log("You lost!");
  else return console.log("Wow, it's a tie!");
}

// onload = function () {
//   game();
// };
