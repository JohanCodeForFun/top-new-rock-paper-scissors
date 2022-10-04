window.onload = (event) => {
  console.log('Get Ready! The Game will start in...');
  console.log('3... 2... 1...');
  
  setTimeout(() => {
    game();
  }, 3000)
};


function game() {
  const hands = ["rock", "paper", "scissors"];
  let playerChoice;
  let computerChoice;
  let computerScore = 0;
  let playerScore = 0;

  const playRound = function () {
    for (let i = 1; i <= 5; i++) {
      console.log("--------------");
      console.log("Round: " + i);
      console.log(`Player score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
      console.log("--------------");

      const getPlayerChoice = function () {
        let playerChoice = prompt("Choose rock, paper or scissors");

        // remove after validation function is done
        // console.log(`Player choose: ${playerChoice}`);
        return playerChoice;
      };

      const getComputerChoice = function () {
        const randomComputerChoice = Math.random();
        const totalHands = hands.length;
        const randomIndex = Math.floor(randomComputerChoice * totalHands);
        const computerChoice = hands[randomIndex];
        return computerChoice;
      };

      function decideWinningHand(computerChoice, playerChoice) {
        console.log(`Computer choose: ${computerChoice}`);
        console.log(`Player choose: ${playerChoice}`);

        if (computerChoice === playerChoice) {
          console.log("It's a tie!");
          return;
        } else {
          if (computerChoice === "rock" && playerChoice === "paper") {
            console.log("Player wins! Paper beats rock");
            playerScore++;
            return;
          } else if (
            computerChoice === "paper" &&
            playerChoice === "scissors"
          ) {
            console.log("Player wins! Scissors beats paper");
            playerScore++;
            return;
          } else if (computerChoice === "scissors" && playerChoice === "rock") {
            console.log("Player wins! Rock beats scissors");
            playerScore++;
            return;
          } else {
            console.log(
              `Computer wins! ${computerChoice} beats ${playerChoice}`
            );
            computerScore++;
            return;
          }
        }
      }
      decideWinningHand(getComputerChoice(), getPlayerChoice());
    }
  };
  playRound();
}

