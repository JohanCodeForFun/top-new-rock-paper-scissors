function game() {
  const hands = ["rock", "paper", "scissors"];
  let playerChoice;
  let computerChoice;
  let score = 0;
  let roundsPlayed;

  const playRound = function () {
    const getComputerChoice = function () {
      const randomComputerChoice = Math.random();
      const totalHands = hands.length;
      const randomIndex = Math.floor(randomComputerChoice * totalHands);
      const computerChoice = hands[randomIndex];

      console.log(`Computer choose: ${computerChoice}`);
      return computerChoice;
    };

    const getPlayerChoice = function () {
      let playerChoice = prompt("Choose rock, paper or scissors");

      console.log(`Player choose: ${playerChoice}`);
      return playerChoice;
    };

    function decideWinningHand(computerChoice, playerChoice) {
      console.log(
        `computer choose: ${computerChoice} while player choose: ${playerChoice}`
      );
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
          console.log("Player wins! Rock beats scissors");
          return;
        } else {
          console.log("Computer wins!");
          return;
        }
      }
    }

    decideWinningHand(getComputerChoice(), getPlayerChoice());
  };
  playRound();
}
game();
