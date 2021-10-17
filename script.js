function computerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "rock" : generator === 1 ? "scissors" : "paper";
  }
}

function userInput() {
  const input = prompt(`Rock, Paper, Scissors?`);
  return input;
}

onload = function () {
   userInput();
};

// function game(playerSelection, computerSelection) {
//   const userScore = 0;
//   const compScore = 0;
//   const rounds = 0;
//   for (let i = 0; i < 5; i++) {
//  
//}
// }


