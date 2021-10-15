function computerPlay() {
  for (let i = 0; i < 5; i++) {
    let generator = Math.round(Math.random() * 9);
    return generator <= 9 && generator > 6
      ? console.log("rock")
      : generator >= 6
      ? console.log("scissors")
      : console.log("paper");
  }
}

let test = computerPlay();
console.log(test);
