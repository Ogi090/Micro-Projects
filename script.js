// Try again from the top







































function playRound(playerSelection, getComputerChoice) {

    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === getComputerChoice) {
        return "It's a tie!";
    }

    if ((playerSelection === 'Rock' && getComputerChoice === 'Scissors') || (playerSelection === 'Paper' && getComputerChoice === 'Rock') || (playerSelection === 'Scissors' && getComputerChoice === 'Paper')) {

        return 'Player 1 wins!';
    } else {
        return 'Player 2 wins!';
    }
}

let answer = parseInt(prompt("Please choise?"));
let playerSelection = answer;



// Computer choise
function getComputerChoice(choise) {
    let computerSelection = Math.floor(Math.random() * choise.length);
    
    return choise[computerSelection];
}

let choise = ['Rock', 'Paper', 'Scissors'];
let computerSelection = getComputerChoice(choise);

console.log(computerSelection);


console.log(playerSelection);
console.log(playRound(playerSelection, getComputerChoice));







// Working version 1 (doesnt inclued game())
// function playRound(playerChoice, computerChoice) {
//     playerChoice = playerChoice.toLowerCase();
  
//     if (playerChoice === computerChoice) {
//       return "It's a tie!";
//     } else if (
//       (playerChoice === 'rock' && computerChoice === 'scissors') ||
//       (playerChoice === 'paper' && computerChoice === 'rock') ||
//       (playerChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//       return 'You win!';
//     } else {
//       return 'Computer wins!';
//     }
//   }
  
//   function getRandomChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   }
  
//   function startGame() {
//     const playerChoice = prompt("Choose: rock, paper, or scissors");
//     const computerChoice = getRandomChoice();
//     const result = playRound(playerChoice, computerChoice);

//     console.log(`Player chose: ${playerChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);
//     console.log(result);
//   }
  
//   startGame();


/* // Working version 2 (include game())
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
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
  
      const playerChoice = prompt("Choose: rock, paper, or scissors");
      const computerChoice = getRandomChoice();
      const result = playRound(playerChoice, computerChoice);
  
      console.log(`Player chose: ${playerChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log(result);
  
      if (result === 'You win!') {
        playerScore++;
      } else if (result === 'Computer wins!') {
        computerScore++;
      }
  
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log('------------------');
    }
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('Computer wins the game. Better luck next time!');
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }
  
  game();
*/
