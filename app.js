let userScore = 0; /* let or var needs to be used as the variable changes */
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* Storing the above for speed so you don't have to type everytime, storing in a variable everytime */
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3); /* Math.floor rounds the number*/
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const smallUserWORD = "user".fontsize(3).sup(); /*Makes the font smaller than superscripts it */
  const smallCompWORD = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}{smallCompWORD}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(user, computer) {
  const smallUserWORD = "user".fontsize(3).sup(); /*Makes the font smaller than superscripts it */
  const smallCompWORD = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}{smallCompWORD}. You lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(user, computer) {
  const smallUserWORD = "user".fontsize(3).sup(); /*Makes the font smaller than superscripts it */
  const smallCompWORD = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}{smallCompWORD}. It's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', ()=> game("r"));
  paper_div.addEventListener('click', ()=> game("p"));
  scissors_div.addEventListener('click',  ()=> game("s"));
}

main();
