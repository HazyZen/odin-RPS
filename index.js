document.body.style.boxSizing = "border-box";
document.body.style.margin = "0";
document.body.style.padding = "0";

let container = document.createElement("div");
document.body.appendChild(container);
container.style.width = "100%";
container.style.height = "100vh";
container.style.paddingLeft = "1rem";

let scoreContainer = document.createElement("div");
scoreContainer.style.display = "flex";
scoreContainer.style.gap = "2rem";

let human = document.createElement("p");
let humanScore = 0;
human.textContent = `Human: ${humanScore}`;

let computer = document.createElement("p");
let computerScore = 0;
computer.textContent = `Computer: ${computerScore}`;

scoreContainer.appendChild(human);
scoreContainer.appendChild(computer);

container.appendChild(scoreContainer);

// buttons
let rockBtn = document.createElement("button");
let paperBtn = document.createElement("button");
let scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener("click", () => {
  let humanChoice = "rock";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
paperBtn.addEventListener("click", () => {
  let humanChoice = "paper";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
scissorsBtn.addEventListener("click", () => {
  let humanChoice = "scissors";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

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

let result = document.createElement("h3");
let winner = document.createElement("h1");

function playRound(humanChoice, computerChoice) {
  // Clear previous result
  result.textContent = "";

  if (humanScore == 5 || computerScore == 5) {
    humanScore = 0;
    computerScore = 0;
    winner.textContent = "";
  }

  if (humanChoice === computerChoice) {
    result.textContent = `It's a tie! You both pick ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    result.textContent = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }.`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
  }

  // Update scores
  human.textContent = `Human: ${humanScore}`;
  computer.textContent = `Computer: ${computerScore}`;

  if (humanScore == 5) {
    winner.textContent = "Congrats! You win.";
  } else if (computerScore == 5) {
    winner.textContent = "You lose! Get better.";
  }

  container.appendChild(result);
  container.appendChild(winner);
}