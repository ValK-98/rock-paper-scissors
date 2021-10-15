function computerPlay() {
  for (let i = 0; i < 5; i++) {
    const generator = Math.round(Math.random() * 9);
    return generator <= 9 && generator > 6
      ? "rock"
      : generator >= 6
      ? "scissors"
      : "paper";
  }
}
function game (playerSelection, computerSelection) {
  return playerSelection.toLowerCase() 
}


console.log(game("rock", computerPlay()));
