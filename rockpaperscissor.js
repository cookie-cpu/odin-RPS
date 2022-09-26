
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
        return "You win! Rock beats Scissors!"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock!"
    
    //logic for playerSelection "Paper"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats rock!"
    

    //logic for playerSelection "Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
         return "You Win! Scissors beats Paper!"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "You Lose! Rock beats Scissors!"
    }   
}


   
  const playerSelection = "rock";
  const computerSelection = getCPUchoice();
  console.log("You chose: " + playerSelection + ", computer chose: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));