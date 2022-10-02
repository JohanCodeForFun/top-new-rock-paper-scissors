function game() {
    const hands = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomComputerChoice = Math.random();
        const totalHands = hands.length;
        const randomIndex = Math.floor(randomComputerChoice * totalHands);
        const computerChoice = hands[randomIndex];
        console.log(computerChoice);
        
        return computerChoice;
        
        // const computerChoice = Math.floor(Math.random() * 3);
        // console.log(computerChoice);
    }

    function getPlayerChoice() {
        const playerChoice = prompt("Choose rock, paper or scissors");
        console.log(playerChoice);
    }
    
    getComputerChoice();
    getPlayerChoice();
}

game();

