let humanChoice = prompt(
  "Start the game by choosing rock, paper or scissors."
).toLowerCase();

let computerChoice = getComputerChoice();

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);

  if (value == 0) {
    return "rock";
  } else if (value == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return `It's a tie! You both pick ${humanChoice}.
      You: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      return `You win! Rock beats Scissors.
      You: ${++humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      return `You win! Scissors beats Paper.
      You: ${++humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      return `You win! Paper beats Rock.
      You: ${++humanScore} | Computer: ${computerScore}`;
    } else {
      return `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.
      You: ${humanScore} | Computer: ${++computerScore}`;
    }
  }
  console.log(playRound(humanChoice, computerChoice));
}
for (let i = 0; i < 5; i++) {
  playGame();
}
