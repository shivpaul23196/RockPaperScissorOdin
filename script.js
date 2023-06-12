
const choices = ["Rock","Paper","Scissor"]

function getComputerChoice() {

     return choices[Math.floor(Math.random()*choices.length)]
    
}
console.log(choices.length)
console.log(getComputerChoice());

function oneRound(playerSelection,computerSelection) {
     if(playerSelection == choices[0] && computerSelection == choices[1]){
          return ("Paper beats Rock, You Lose!");
     }

          else if(playerSelection == choices[0] && computerSelection == choices[2]){
          return ("Rock beats Scissors, You Win!")
     }
          else if(playerSelection == choices[1] && computerSelection == choices[0]){
          return ("Paper beats Rock, You Win!")
     }
          else if(playerSelection == choices[1] && computerSelection == choices[2]){
          return ("Scissor beats Paper, You Lose!")
     }
          else if(playerSelection == choices[2] && computerSelection == choices[0]){
          return ("Rock beats Scissor, You Lose!")
     
     }
          else if(playerSelection == choices[2] && computerSelection == choices[1]){
          return ("Scissor beats Paper, You Win!")
     
     }
          else {
          return error 
     }

}