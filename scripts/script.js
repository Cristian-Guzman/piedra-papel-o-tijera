const computerPlay = () => {
    const ramdom = Math.random() * 2 + 1;
    
    if (ramdom.toFixed(0) == 1) {
        return "rock";
    } else if (ramdom.toFixed(0) == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playRound = (playerSelection, computerSelection) => {
    const lowerPlayer = playerSelection.toLowerCase();
    const lowerComputer = computerSelection.toLowerCase();

    if (lowerPlayer == "rock" && lowerComputer == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (lowerPlayer == "rock" && lowerComputer == "paper") {
        return "You lose! Paper beats Rock";
    } else if (lowerPlayer == "rock" && lowerComputer == "rock") {
        return "Nobody win, try again!";
    } else if (lowerPlayer == "paper" && lowerComputer == "scissors") {
        return "You lose! Scissors beats paper";
    } else if (lowerPlayer == "paper" && lowerComputer == "rock") {
        return "You win! Paper beats Rock";
    } else if (lowerPlayer == "paper" && lowerComputer == "paper") {
        return "Nobody win, try again!";
    } else if (lowerPlayer == "scissors" && lowerComputer == "rock") {
        return "You lose! Rock beats Scissors";
    } else if (lowerPlayer == "scissors" && lowerComputer == "paper") {
        return "You win! Scissors beats paper";
    } else if (lowerPlayer == "scissors" && lowerComputer == "scissors"){
        return "Nobody win, try again!";
    } else {
        return "Try again another value";
    }
}

const game = () => {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("ROCK PAPER OR SCISSORS");        
        const computerSelection = computerPlay();
        const ramdomGame = playRound(playerSelection, computerSelection);
        console.log(ramdomGame);        
        if (ramdomGame == "You win! Scissors beats paper" || ramdomGame == "You win! Rock beats Scissors" || ramdomGame == "You win! Paper beats Rock" ) {
            score++;
        }
    }
    if (score >= 3) {
        return `You win with ${score} of score`;
    } else {
        return `You lose with ${score} of score`;
    } 
}

console.log(game());



