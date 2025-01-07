let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let titleContainer = document.createElement("div");
let title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";
titleContainer.appendChild(title);
let conditionToWin = document.createElement("p");
conditionToWin.textContent = "First to 5 wins";
titleContainer.appendChild(conditionToWin);
container.appendChild(titleContainer);

let scoreContainer = document.createElement("div");
scoreContainer.classList.add("scoreContainer");

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
let btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
let rockBtn = document.createElement("button");
rockBtn.classList.add("btn");
let paperBtn = document.createElement("button");
paperBtn.classList.add("btn");
let scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("btn");

btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);

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

container.appendChild(btnContainer);

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
    winner.remove();
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

  container.appendChild(result);

  if (humanScore == 5) {
    winner.textContent = "Congrats! You defeated the Computer.";
    winner.style.color = "green";
    container.appendChild(winner);
  } else if (computerScore == 5) {
    winner.textContent = "Computer defeated you. Wow you suck!";
    winner.style.color = "red";
    container.appendChild(winner);
  }
}
