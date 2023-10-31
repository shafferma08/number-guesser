let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, target) {
  const humanDifference = Math.abs(target - humanGuess);
  const computerDifference = Math.abs(target - computerGuess);
  return humanDifference <= computerDifference;
}

console.log(compareGuesses(3, 5, 4))

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}










