const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    // Getting computer choice
    const getcomputerChoice = Math.floor(Math.random() * 3);
    const computerChoice = choices[getcomputerChoice];
    console.log(computerChoice);
    computerSelection = computerChoice;

    playerSelection = prompt("rock, paper, scissors").toLowerCase();

    // Comparing the selections to determine the winner per round
    // if(playerSelection === computerSelection){
    //     console.log(playerSelection);
    //     console.log("It's a tie");
    // }else if(computerSelection === choices[1]){
    //     console.log(playerSelection);
    //     console.log("Computer Wins!");
    // }else{
    //     console.log(playerSelection);
    //     console.log("Computer loses, Well done PLAYER");
    // }
    // Comparaison of choices
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        console.log(playerSelection);
        console.log("You beat computer");
        playerScore++;
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        console.log(playerSelection);
        console.log("Computer beats you");
        computerScore++;

    }
    else if (computerSelection == 'paper' && playerSelection == 'rock'){
        console.log(playerSelection);
        console.log("Computer beats you");
        computerScore++;

    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        console.log(playerSelection);
        console.log("You beat the Computer");
        playerScore++;

    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        console.log(playerSelection);
        console.log("You beat the computer");
        playerScore++;

    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        console.log(playerSelection);
        console.log("Computer beats you");
        computerScore++;

    } 
    else if (computerSelection == playerSelection){
        console.log(playerSelection);
        console.log("It\'s a tie");
    }else {
        console.log(playerSelection);
        console.log('Invalid choice!');
        return;
    }
}

// playRound();
function game(){

    for(let i = 0; i < 5; i++){
        // playerchoice
    // playerSelection = prompt("rock, paper, scissors").toLowerCase();
         playRound();
 
    }
    if (computerScore > playerScore){
        //Final outcome
        console.log(` Computer scores: ${computerScore} \n Humanity extinct!`);
    } else if(computerScore ==playerScore){
        console.log(`Computer scored: ${computerScore} \n You scored: ${playerScore} \n You got a second chance to save Humanity!`);
    }else{
        console.log(`You scored: ${playerScore} \n You saved Humanity!`)
    }
}
game();