const hands = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
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


// show game & btn text 
// const showResult = document.getElementById('result-container');
// const resultContent = document.createElement('p');
// resultContent.textContent = "testin testing";
// showResult.appendChild(resultContent);

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = `Have fun playing!`;
sect.appendChild(para);


function gameOver() {
  if (playerScore === 3) {
    alert("Player wins!");
  } else if (computerScore === 3) {
    alert("Computer --- wins!");
  }
}

function getPlayerChoice() {
  btnRock.addEventListener("click", function () {
    playerChoice = "rock";
    para.textContent = `Player choose: ${playerChoice} & 
    Computer choose: ${computerChoice}`;
    console.log(`Player choose: ${playerChoice}`);
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
};

function getComputerChoice() {
  const randomComputerChoice = Math.random();
  const totalHands = hands.length;
  const randomIndex = Math.floor(randomComputerChoice * totalHands);
  const computerChoice = hands[randomIndex];
  return computerChoice;
};

playRound(getComputerChoice(), getPlayerChoice());

gameOver();