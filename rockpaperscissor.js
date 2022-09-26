
function getCPUchoice() {
    switch(Math.floor(Math.random() * 3))
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        }
}
// console.log("CPU Chose: " + getCPUchoice())


function playRound(playerSelection, computerSelection) {

    //case conversion for easier string comparison
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // Same choice leads to a tie
    if (playerSelection == computerSelection) {
        return "Tie! You chose the same the move!"

    //logic for playerSelection 'Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        return "You win! Rock beats Scissors!"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        return "You lose! Paper beats Rock!"
        
    
    //logic for playerSelection "Paper"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
        return "You Win! Paper beats rock!"
        
    

    //logic for playerSelection "Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
         playerScore++
         return "You Win! Scissors beats Paper!"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++
        return "You Lose! Rock beats Scissors!"
    
    }   
}

let playerScore = 0
let computerScore = 0
const playerSelection = "rock";
const computerSelection = getCPUchoice();

function game(){
    while (playerScore || computerScore < 5) {
        playRound(playerSelection, computerSelection)
        return "Score is: \n p1:" + playerScore + "\n p2:" + computerScore
    }
    
}

//   console.log("You chose: " + playerSelection + ", computer chose: " + computerSelection);
//   console.log(playRound(playerSelection, computerSelection));
  