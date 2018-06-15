let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userscore');
const computerScore_span = document.getElementById('computerscore');
const Rock = document.getElementById('rock');
const Paper = document.getElementById('paper');
const Scissors = document.getElementById('scissors');
const result = document.querySelector('.result');

function getComputerChoice(){
  let choices = ['Rock','Paper','Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win (userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = 'You win! ' + userChoice + ' beats ' + computerChoice;
}

function lose (userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = 'You lose! ' + computerChoice + ' beats ' + userChoice;
}

function tie (userChoice, computerChoice){
  result.innerHTML = "It's a tie. Play again!";
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      tie(userChoice, computerChoice);
      break;
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
  }
}

function main(){
  Rock.addEventListener('click', function()
    { game('Rock');
  })

  Paper.addEventListener('click', function()
    { game('Paper');
  })

  Scissors.addEventListener('click', function()
    { game('Scissors');
  })
}

main();
