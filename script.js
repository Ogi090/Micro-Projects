
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



// Working one
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







// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

/* 
    1. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

/*  
    2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

/*
    Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
    At this point you should be using console.log() to display the results of each round and the winner at the end.
    Use prompt() to get input from the user. Read the docs here if you need to.
    Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    Feel free to create more “helper” functions if you think it would be useful.
*/



