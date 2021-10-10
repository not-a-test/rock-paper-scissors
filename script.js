function computerPlay(){
    let compChoices = ["Rock", "Paper", "Scissors"];

    return compChoices[Math.random() * compChoices.length];
}

    function playRound(playerSelection, computerSelection){
        if(playerSelection == "Paper" && computerSelection == "Rock"){
            return "Player Wins!";
        } else if(playerSelection == "Scissors" && computerSelection == "Paper"){
            return "Player Wins!";
        } else if(playerSelection == "Rock" && computerSelection == "Scissors"){
            return "Player Wins!";
        } else if(computerSelection == "Paper" && playerSelection == "Rock"){
            return "Computer Wins!";
        } else if(computerSelection == "Scissors" && playerSelection == "Paper"){
            return "Computer Wins!";
        } else if(computerSelection == "Rock" && playerSelection == "Scissors"){
            return "Computer Wins!";
        } else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
            return "Draw"
        } else if(playerSelection == "Rock" && computerSelection == "Rock"){
            return "Draw";
        } else if(playerSelection == "Paper" && computerSelection == "Paper"){
            return "Draw";
        }
    }

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));