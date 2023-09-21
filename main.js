
let playerScore = 0;
let computerScore = 0;

// Defining papameters
// const play = document.querySelector('.play');
const rock = document.querySelector('.rock') ;
const paper = document.querySelector('.paper') ;
const scissors = document.querySelector('.scissors') ;
const outcome = document.querySelector('.outcome_div');
const determine_winner = document.querySelector('.win_or_lose');
const result = document.querySelector('.outcome');
const update = document.querySelector('.score');
let score_update = document.querySelector(".score_update");

 // Getting computer choice
function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    const getcomputerChoice = Math.floor(Math.random() * 3);
    const computerChoice = choices[getcomputerChoice];
    return computerChoice;
}
//Play round function
function playRound(playerSelection, computerSelection){
    // Comparaison of choices
    console.log(`Player; ${playerSelection}: Computer; ${computerSelection}`)
    console.log(`Player; ${playerScore}: Computer; ${computerScore}`)
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        result.innerText = "You beat computer";
        playerScore++;
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        result.innerText = "Computer beats you";
        computerScore++;
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock'){
        result.innerText = "Computer beats you";
        computerScore++;
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        result.innerText = "You beat the Computer";
        playerScore++;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        result.innerText = "You beat the computer";
        playerScore++;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        result.innerText = "Computer beats you";
        computerScore++;
    }
    else if (computerSelection == playerSelection){
        result.innerText = `It\'s a tie, You both selected ${playerSelection}`;
    }else {
        result.innerText = `Invalid choice!, ${playerSelection} is not valid!`;
    }
}
// Check winner
const checkWinner = (playerScore, computerScore) => {
        if (playerScore == 3){
            determine_winner.innerText = "You win";
        }else if (computerScore == 3){
            determine_winner.innerText = "Computer wins";
        }
    }
      
function score(){
   score_update.innerText = `Player Score:  ${playerScore} Computer Score:  ${computerScore}`;
}
 //Adding eventlisteners
 rock.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    score(playerScore, computerScore)
});
paper.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    score(playerScore, computerScore)
});
scissors.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    score(playerScore, computerScore)
});