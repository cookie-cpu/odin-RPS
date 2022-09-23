
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getCPUchoice(x) {
    switch(getRandomInt(x))
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
        }
}
// console.log("CPU Chose: " + getCPUchoice())

function playRound(getCPUchoice, playerChoice){
    if (getCPUchoice == "Rock" && playerChoice == "Rock") {
        return "Tie"
    } else {
        
    }
}

console.log(playRound(3, "Rock"));