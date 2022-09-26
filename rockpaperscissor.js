
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
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    switch (playerSelection) {
        case "rock":
            return "tie"
            break;
    
        default:
            break;
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getCPUchoice();
  console.log(playRound(playerSelection, computerSelection));