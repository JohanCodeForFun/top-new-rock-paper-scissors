const hands = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

function playRound(computerChoice, playerChoice) {
  console.log(`Computer choose: ${computerChoice}`);
  console.log(`Player choose: ${playerChoice}`);

  if (computerChoice === playerChoice) {
    console.log("It's a tie!");
    displayWinner.textContent = "= = =";
  } else {
    if (computerChoice === "rock" && playerChoice === "paper") {
      displayWinner.textContent = "==>>";
      console.log("Player wins! Paper beats rock");
      playerScore++;
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
      displayWinner.textContent = "==>>";
      playerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
      displayWinner.textContent = "==>>";
      playerScore++;
    } else {
      console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
      displayWinner.textContent = "<<==";
      computerScore++;
    }
  }

  gameOver();
  return;

}


// show game & btn text 
// const showResult = document.getElementById('result-container');
// const resultContent = document.createElement('p');
// resultContent.textContent = "testin testing";
// showResult.appendChild(resultContent);

const sect = document.querySelector("section");
const displayWinner = document.querySelector("#displayWinner");
displayWinner.textContent = "Have fun!";
const para = document.createElement("p");
const para2 = document.createElement("p");
para.textContent = `Have fun playing!`;
para2.textContent = `Have fun playing!`;
sect.appendChild(para);
sect.appendChild(para2);

const playerScoreDisplay = document.getElementById(playerScoreDisplay1);
const computerScoreDisplay = document.getElementById(computerScoreDisplay1);

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;



function gameOver() {
  if (playerScore === 3) {
    displayWinner.textContent = "Player wins!";
  } else if (computerScore === 3) {
    displayWinner.textContent = "Computer --- wins!";
  }
}

function updateScore() {

}


function initiateButtonListeners() {
  btnRock.addEventListener("click", function () {
    playerChoice = "rock";
    para.textContent = `Player choose: ${playerChoice}`;

    playRound(getComputerChoice(), playerChoice);
    return playerChoice;
  });
  btnPaper.addEventListener("click", function () {
    playerChoice = "paper";
    para.textContent = `Player choose: ${playerChoice} `;

    playRound(getComputerChoice(), playerChoice);
    return playerChoice;
  });
  btnScissors.addEventListener("click", function () {
    playerChoice = "scissors";
    para.textContent = `Player choose: ${playerChoice} `;

    playRound(getComputerChoice(), playerChoice);
    return playerChoice;
  });

};

function getComputerChoice() {
  const randomComputerChoice = Math.random();
  const totalHands = hands.length;
  const randomIndex = Math.floor(randomComputerChoice * totalHands);
  para2.textContent = `Computer choose: ${hands[randomIndex]} `;
  return hands[randomIndex];
};

initiateButtonListeners();
