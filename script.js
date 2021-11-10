let userScore = 0;
let compScore = 0;
let rounds = 1;

document.getElementById("round").innerHTML = `Pick Your Monster:`;
document.getElementById("player-score").innerHTML = `Player Score: ${userScore}`;
document.getElementById("computer-score").innerHTML = `Computer Score: ${compScore}`;

const pcButton = document.getElementById("player-buttons");
const endText = document.createElement("div");
const computerSelection = document.getElementById("npc-choice");

const goblin = document.getElementById("goblin");
const ogre = document.getElementById("ogre");
const troll = document.getElementById("troll");

const goblinSelect = () => game("goblin");
const ogreSelect = () => game("ogre");
const trollSelect = () => game("troll");

goblin.addEventListener("click", goblinSelect);
ogre.addEventListener("click", ogreSelect);
troll.addEventListener("click", trollSelect);

const restart = () => location.reload();

function computerPlay() {
  for (let i = 0; i < 2; i++) {
    const generator = Math.round(Math.random() * 2);
    return generator === 2 ? "Ogre" : generator === 1 ? "Goblin" : "Troll";
  }
}

function game(playerSelection) {
  for (let i = 0; i < 1; i++) {
    playRound(playerSelection);
    scoreDisplays();
    rounds++;
    if (rounds === 6) endScore();
  }
}

function endScore() {
  if (userScore > compScore) win();
  else if (userScore < compScore) lost();
  else return tie();
}

function scoreDisplays() {
  document.getElementById("round").innerHTML = `Round ${rounds}`;
  document.getElementById("player-score").innerHTML = `Player Score: ${userScore}`;
  document.getElementById("computer-score").innerHTML = `Computer Score: ${compScore}`;
}

function lost() {
  imgRemove();
  endText.innerHTML = `You lost! Better luck next time!`;
  endText.style.fontSize = "1em";
  endText.style.fontStyle = "italic";
  pcButton.append(endText);
  buttonCreate();
}

function win() {
  imgRemove();
  endText.innerHTML = `You Won! How does it feel to win against a machine?`;
  endText.style.fontSize = "1em";
  endText.style.fontStyle = "italic";
  pcButton.append(endText);
  buttonCreate();
}

function tie() {
  imgRemove();
  endText.innerHTML = `It's a...Tie? Well, this is awkward.`;
  endText.style.fontSize = "1em";
  endText.style.fontStyle = "italic";
  pcButton.append(endText);
  buttonCreate();
}

function imgRemove() {
  computerSelection.removeChild(computerSelection.firstChild);
  while (pcButton.firstChild) {
    pcButton.removeChild(pcButton.firstChild);
  }
}

function buttonCreate() {
  let btn = document.createElement("button");
  btn.setAttribute("id", "restartButton");
  btn.innerHTML = "Try again?";
  computerSelection.append(btn);
  restartButton.addEventListener("click", restart);
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  if (
    (playerSelection.toLowerCase() === "goblin" &&
      computerSelection.toLowerCase() === "troll") ||
    (playerSelection.toLowerCase() === "ogre" &&
      computerSelection.toLowerCase() === "goblin") ||
    (playerSelection.toLowerCase() === "troll" &&
      computerSelection.toLowerCase() === "ogre")
  )
    return (
      userScore++,
      (document.getElementById(
        "npc-choice"
      ).innerHTML = `You win! Computer chose ${computerPlay()}.`)
    );
  else if (
    (playerSelection.toLowerCase() === "ogre" &&
      computerSelection.toLowerCase() === "troll") ||
    (playerSelection.toLowerCase() === "troll" &&
      computerSelection.toLowerCase() === "goblin") ||
    (playerSelection.toLowerCase() === "goblin" &&
      computerSelection.toLowerCase() === "ogre")
  )
    return (
      compScore++,
      (document.getElementById(
        "npc-choice"
      ).innerHTML = `You lose! Computer chose ${computerPlay()}.`)
    );
  else return (document.getElementById("npc-choice").innerHTML = `It's a tie!`);
}
