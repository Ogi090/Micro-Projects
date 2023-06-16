// Testing version
// Computer choise
function getComputerChoice(choise) {
    let computerSelection = Math.floor(Math.random() * choise.length);
    
    return choise[computerSelection];
}

let choise = ['Rock', 'Paper', 'Scissors'];
let computerSelection = getComputerChoice(choise);

console.log(computerSelection);



function playRound(playerSelection, getComputerChoice) {

    // playerSelection.toLowerCase();
    // getComputerChoice.toLowerCase();

    if (playerSelection === getComputerChoice) {
        return "It's a tie!";
    }

    if ((playerSelection === 'Rock' && getComputerChoice === 'Scissors') || (playerSelection === 'Paper' && getComputerChoice === 'Rock') || (playerSelection === 'Scissors' && getComputerChoice === 'Paper')) {

        return 'Player 1 wins!';
    } else {
        return 'Player 2 wins!';
    }

    // if (getComputerChoice === "Scissors")  {
    //     return 'Player 1 wins!';
    // } else (getComputerChoice === "Paper") 
    //     return 'Player 2 wins!'; 
}

let answer = parseInt(prompt("Please choise?"));
let playerSelection = answer;

console.log(playerSelection);
console.log(playRound(playerSelection, getComputerChoice));



// Working version
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
  
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function startGame() {
    const playerChoice = prompt("Choose: rock, paper, or scissors");
    const computerChoice = getRandomChoice();
    const result = playRound(playerChoice, computerChoice);

    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);
  }
  
  startGame();







