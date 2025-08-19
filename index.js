const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const results = document.getElementById('results');

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 3){
        return "rock";
    }
    else if (randomNumber === 1){
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors";
    }
}




function playGame(){
    let round = 1;

    let humanScore = 0;
    let computerScore = 0;

    rockButton.addEventListener("click", (event) => {
        event.preventDefault();
        playRound("rock", getComputerChoice());
    });
    paperButton.addEventListener("click",(event) => {
         event.preventDefault();
         playRound("paper", getComputerChoice());
        });
    scissorsButton.addEventListener("click", (event) => {
        event.preventDefault();
        playRound("scissors", getComputerChoice());
    });

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
            results.textContent = "It's a Draw";
        } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
        humanScore += 1;
        results.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        } else {
        computerScore += 1;
        results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        }


        if (humanScore === 5 || computerScore === 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
    
            if (humanScore > computerScore){
                results.textContent = "You're the overall winner!";
            }
            else if (computerScore > humanScore){
                results.textContent = "Computer wins overall";
            }
    }
    }

}

playGame();