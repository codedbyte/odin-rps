function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1){
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors";
    }
}


function getHumanChoice (){
    let humanRepsonse = prompt('ROCK, PAPER OR SCISSORS:');
    return humanRepsonse.toLowerCase();
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame(){
    let round = 1;

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
      console.log("It's a Draw");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }

}

     
    while (round <= 5){
        console.log(`Round:${round}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    }

    console.log("Final Results");
    if (humanScore > computerScore){
        console.log("You're the overall winner!");
    }
    else if (computerScore > humanScore){
        console.log("Computer wins overall");
    }
    else{
        console.log("It's an overall Draw!");
    }
}

playGame();