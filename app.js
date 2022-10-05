// window.onload = (event) => {
//   console.log("Get Ready! The Game will start in...");
//   console.log("3... 2... 1...");

//   setTimeout(() => {
//     game();
//   }, 3000);
// };

function game() {
  const hands = ["rock", "paper", "scissors"];
  let playerChoice;
  let computerChoice;
  let computerScore = 0;
  let playerScore = 0;

  const btnRock = document.getElementById("rock");
  const btnPaper = document.getElementById("paper");
  const btnScissors = document.getElementById("scissors");

  // const showResult = document.getElementById('result-container');
  // const resultContent = document.createElement('p');
  // resultContent.textContent = "testin testing";
  // showResult.appendChild(resultContent);

  const sect = document.querySelector("section");
  const para = document.createElement("p");
  para.textContent = `Have fun playing!`;
  sect.appendChild(para);

  const playRound = function () {
    if (playerScore === 3) {
      alert("Player wins!");
    } else if (computerScore === 3) {
      para.textContent = "Computer wins!";
    }

    const getPlayerChoice = function () {
      btnRock.addEventListener("click", function () {
        playerChoice = "rock";
        para.textContent = `Player choose: ${playerChoice} & 
        Computer choose: ${computerChoice}`;
        console.log(`Player choose: ${playerChoice}`);
        playerScore++;
        return playerChoice;
      });
      btnPaper.addEventListener("click", function () {
        playerChoice = "paper";
        para.textContent = `Player choose: ${playerChoice} `;
        console.log(`Player choose: ${playerChoice}`);
        return playerChoice;
      });
      btnScissors.addEventListener("click", function () {
        playerChoice = "scissors";
        para.textContent = `Player choose: ${playerChoice} `;
        console.log(`Player choose: ${playerChoice}`);
        return playerChoice;
      });
      // let playerChoice = prompt("Choose rock, paper or scissors");
      // remove after validation function is done
      // console.log(`Player choose: ${playerChoice}`);
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
        } else if (computerChoice === "paper" && playerChoice === "scissors") {
          console.log("Player wins! Scissors beats paper");
          playerScore++;
          return;
        } else if (computerChoice === "scissors" && playerChoice === "rock") {
          console.log("Player wins! Rock beats scissors");
          playerScore++;
          return;
        } else {
          console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
          computerScore++;
          return;
        }
      }
    }
    decideWinningHand(getComputerChoice(), getPlayerChoice());
  };
  playRound();
}
game();
