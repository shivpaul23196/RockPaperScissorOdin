const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = getComputerChoice();
const playerSelection = prompt('Enter Selection');

function oneRound(playerSelection, computerSelection) {
     
  if (playerSelection == choices[0] && 
     computerSelection === choices[1]) {
    return "Paper beats Rock, You Lose!";
  } else if (
    playerSelection == choices[0] &&
    computerSelection === choices[2]
  ) {
    return "Rock beats Scissors, You Win!";
  } else if (
    playerSelection == choices[1] &&
    computerSelection === choices[0]
  ) {
    return "Paper beats Rock, You Win!";
  } else if (
    playerSelection == choices[1] &&
    computerSelection === choices[2]
  ) {
    return "Scissor beats Paper, You Lose!";
  } else if (
    playerSelection == choices[2] &&
    computerSelection === choices[0]
  ) {
    return "Rock beats Scissor, You Lose!";
  } else if (
    playerSelection == choices[2] &&
    computerSelection === choices[1]
  ) {
    return "Scissor beats Paper, You Win!";
  } else if (
    playerSelection == choices[2] &&
    computerSelection === choices[2]
  ) {
    return "Its a Draw!";
  } else if (
    playerSelection == choices[1] &&
    computerSelection === choices[1]
  ) {
    return "Its a Draw!";
  } else if (
    playerSelection == choices[0] &&
    computerSelection === choices[0]
  ) {
    return "Its a Draw!";
  } else {
    return error;
  }
}
console.log(computerSelection);
console.log(oneRound("Scissor", computerSelection));

const roundOutcome = oneRound(playerSelection, computerSelection)

const game = () => {
  for (let i = 0; i < 6; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter Selection");

    roundOutcome;

    let regExp = /Win/;
    let winner = 
    regExp.test(roundOutcome);
    let regExp1 = /Lose/;
    let loser = 
    regExp1.test(roundOutcome);

    let player = 0;
    let computer = 0;

    if (winner === true) {
      player += 1;
    } else if (loser === true) {
      computer += 1;
    } else {
      continue;
    }
  }
};

if (player > computer) {
  console.log(player);
  console.log("You Win");
} else {
  console.log(computer);
  console.log("You lose");
}