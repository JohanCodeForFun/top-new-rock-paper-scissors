const hands = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomComputerChoice = Math.random();
    const totalHands = hands.length;
    const randomIndex = Math.floor(randomComputerChoice * totalHands);
    const randomComputerHand = hands[randomIndex];
    console.log(randomComputerHand);
    
    // const computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice);
}

getComputerChoice();