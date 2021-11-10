let userScore = 0;
let compScore = 0;
let rounds = 1;
document.getElementById("round").innerHTML = `Pick Your Monster:`;
document.getElementById("player-score").innerHTML = `Player Score: ${userScore}`;
document.getElementById("computer-score").innerHTML = `Computer Score: ${compScore}`;
const goblin = document.getElementById("goblin");
const ogre = document.getElementById("ogre");
const troll = document.getElementById("troll");

function computerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "Rock" : generator === 1 ? "scissors" : "paper";
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  if (
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors")
  )
    return userScore++;
    else if (
      (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
      (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "scissors") ||
      (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "paper") ||
      (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "rock")
      )
      return compScore++;
      else console.log("It's a tie!");
    }
    
    function game(playerSelection) {
      for (let i = 0; i < 1; i++) {
        playRound(playerSelection);
        scoreDisplays();
        npcChoice();
        rounds++;
        if (rounds === 6) endScore();
      }
    }
    function npcChoice(){
      document.getElementById("npc-choice").innerHTML = `Computer chose ${computerPlay()}`;
    }

    function goblinSelect() {
      game("scissors");
    }
    function ogreSelect() {
      game("scissors");
    }
    function trollSelect() {
      game("paper");
    }
    
    function endScore() {
      if (userScore > compScore) return console.log("You won!");
      else if (userScore < compScore) return console.log("You lost!");
      else return console.log("Wow, it's a tie!");
}



function scoreDisplays() {
  document.getElementById("round").innerHTML = `Round ${rounds}`;
  document.getElementById("player-score").innerHTML = `Player Score: ${userScore}`;
  document.getElementById("computer-score").innerHTML = `Computer Score: ${compScore}`;
}


goblin.addEventListener("click", goblinSelect);
ogre.addEventListener("click", ogreSelect);
troll.addEventListener("click", trollSelect);
