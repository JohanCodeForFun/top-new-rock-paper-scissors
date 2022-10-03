function game() {
  const hands = ["rock", "paper", "scissors"];

  const playRound = function () {
    const getComputerChoice = function () {
      const randomComputerChoice = Math.random();
      const totalHands = hands.length;
      const randomIndex = Math.floor(randomComputerChoice * totalHands);
      const computerChoice = hands[randomIndex];
      console.log("computer choose: " + computerChoice);

      return computerChoice;

    //   const computerChoice = Math.floor(Math.random() * 3);
    //   console.log(computerChoice);
    };

    const getPlayerChoice = function () {
      let playerChoice = prompt("Choose rock, paper or scissors");
      if (playerChoice === "rock" || "paper" || "scissors") {
        console.log("player choose: " + playerChoice);
        return playerChoice;
      } else {
        alert("Write either rock, paper or scissors.");
        playerChoice = prompt("Choose rock, paper or scissors");
        return playerChoice;
      }
      console.log(playerChoice);
      return playerChoice;
    };

    getComputerChoice();
    getPlayerChoice();

    const decideWinningHand = function (computerChoice, playerChoice) {
        console.log(computerChoice);
        console.log(playerChoice);
      if (computerChoice === playerChoice) {
        console.log("It's a tie!");
        return;
      } else {
        if (computerChoice === "rock" && playerChoice === "paper") {
          console.log("Player wins! Paper beats rock");
          return;
        } else if (computerChoice === "paper" && playerChoice === "scissors") {
          console.log("Player wins! Scissors beats paper");
          return;
        } else if (computerChoice === "scissors" && playerChoice === "rock") {
          console.log("Player wins! Rock beats scissord");
          return;
        } else {
          console.log("Computer wins!");
          return;
        }
      }
    };
    decideWinningHand();
  };
  playRound();
}
game();
