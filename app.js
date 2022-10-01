const hands = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
}

getComputerChoice();