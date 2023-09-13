const choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection){

    // playerchoice
    playerSelection = choices[0];

    // Getting computer choice
    const getComputerChoice = Math.floor(Math.random() * 3);
    const computerChoice = choices[getComputerChoice];
    console.log(computerChoice);
    computerSelection = computerChoice;

    // Comparing the selections to determine the winner per round
    if(playerSelection === computerSelection){
        console.log(playerSelection);
        console.log("It's a tie");
    }else if(computerSelection === choices[1]){
        console.log(playerSelection);
        console.log("Computer Wins!");
    }else{
        console.log(playerSelection);
        console.log("Computer loses, Well done PLAYER");
    }
}
playRound();