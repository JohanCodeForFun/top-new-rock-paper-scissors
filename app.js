How do I pass computerChoice and playerChoice to decideWinningHand function? Right now I get undefined and always a tie when I run decideWinningHand(). Really appreciate if you could help me understand what I'm doing wrong. Here is my code: 

```
// Rock Paper Scissors

function getComputerChoice() {
    let computerChoice = "rock";
    console.log(computerChoice);
    return computerChoice;
};

function getPlayerChoice() {
    let playerChoice = "paper";
    console.log(playerChoice);
    return playerChoice;
}

getComputerChoice();
getPlayerChoice();

function decideWinningHand(playerChoice, computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
    if (playerChoice === computerChoice) {
        return console.log("Its a tie");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return console.log("player wins!");
    }
}

decideWinningHand();

```






// function game() {
//   const hands = ["rock", "paper", "scissors"];
//   let playerChoice;
//   let computerChoice;

//   const playRound = function () {
//     const getComputerChoice = function () {
//       const randomComputerChoice = Math.random();
//       const totalHands = hands.length;
//       const randomIndex = Math.floor(randomComputerChoice * totalHands);
//       const computerChoice = hands[randomIndex];
//       console.log("computer choose: " + computerChoice);
      
      
//     //   const computerChoice = hands[Math.floor(Math.random() * hands.length)];
//     //   console.log("computer choose: " + computerChoice);
//       return computerChoice;
//     };

//     const getPlayerChoice = function () {
//       let playerChoice = prompt("Choose rock, paper or scissors");
//       if (playerChoice === "rock" || "paper" || "scissors") {
//         console.log("player choose: " + playerChoice);
//         return playerChoice;
//       } else {
//         alert("Write either rock, paper or scissors.");
//         playerChoice = prompt("Choose rock, paper or scissors");
//         return playerChoice;
//       }
//       console.log(playerChoice);
//       return playerChoice;
//     };

//     getComputerChoice();
//     getPlayerChoice();

//     const decideWinningHand = function (computerChoice, playerChoice) {
//         console.log(computerChoice);
//         console.log(playerChoice);
//       if (computerChoice === playerChoice) {
//         console.log("It's a tie!");
//         return;
//       } else {
//         if (computerChoice === "rock" && playerChoice === "paper") {
//           console.log("Player wins! Paper beats rock");
//           return;
//         } else if (computerChoice === "paper" && playerChoice === "scissors") {
//           console.log("Player wins! Scissors beats paper");
//           return;
//         } else if (computerChoice === "scissors" && playerChoice === "rock") {
//           console.log("Player wins! Rock beats scissord");
//           return;
//         } else {
//           console.log("Computer wins!");
//           return;
//         }
//       }
//     };
//     decideWinningHand(computerChoice, playerChoice);
//   };
//   playRound(computerChoice, playerChoice);
// }
// game();
