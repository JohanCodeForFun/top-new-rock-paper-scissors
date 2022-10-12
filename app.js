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
  } else {
    if (computerChoice === "rock" && playerChoice === "paper") {
      console.log("Player wins! Paper beats rock");
      playerScore++;
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
      console.log("Player wins! Scissors beats paper");
      playerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
      console.log("Player wins! Rock beats scissors");
      playerScore++;
    } else {
      console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
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


function initiateButtonListeners() {
  btnRock.addEventListener("click", function () {
    playerChoice = "rock";
    para.textContent = `Player choose: ${playerChoice}`;

    let computerChoice = getComputerChoice();

    playRound(computerChoice, playerChoice);

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
  return hands[randomIndex];
};

initiateButtonListeners();
