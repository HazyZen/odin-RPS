let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a tie! You both pick ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }.`;
  } else {
    computerScore++;
    return `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = prompt("Choose Rock, Paper or Scissors.").toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You defeated your opponent!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins, get better!");
  } else {
    console.log("You're both bad at this game.");
  }
}

playGame();
