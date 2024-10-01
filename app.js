let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const choicesDiv = document.querySelector(".choices");
const choicesDivList = document.querySelectorAll(".choices");

console.log("choices", choicesDiv, choicesDivList);
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const scoreBoard = document.querySelector(".score-board");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const userText = document.querySelector(".user-score-para");
const compText = document.querySelector(".comp-score-para");
const newGame = document.querySelector(".newgame");
const darkModeBtn = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const div = document.querySelector("div");
const buttons = document.querySelector(".buttons");
const myName = document.querySelector(".my-name");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let darkModeState = true;

let darkModeCheck = () => {
  console.log("dark mode state", darkModeState);
  //Light mode
  if (darkModeState === false) {
    choicesDiv.style.backgroundColor = "white";
    darkModeBtn.innerText = "Turn on Dark Mode";
    console.log("inside white color");
    body.style.backgroundColor = "white";
    div.style.backgroundColor = "white";
    scoreBoard.style.backgroundColor = "white";
    compScorePara.style.backgroundColor = "white";
    userScorePara.style.backgroundColor = "white";
    userScorePara.style.color = "black";
    compScorePara.style.color = "black";
    compText.style.backgroundColor = "white";
    userText.style.backgroundColor = "white";
    compText.style.color = "black";
    userText.style.color = "black";
    msgContainer.style.backgroundColor = "white";
    myName.style.color = "black";
    myName.style.backgroundColor = "white";
    darkModeState = true;
    //Dark mode
  } else {
    choicesDiv.style.backgroundColor = "black";

    darkModeBtn.innerText = "Turn on Light Mode";
    console.log("inside black color");
    body.style.backgroundColor = "black";
    div.style.backgroundColor = "black";
    scoreBoard.style.backgroundColor = "black";
    compScorePara.style.backgroundColor = "black";
    userScorePara.style.backgroundColor = "black";
    userScorePara.style.color = "white";
    compScorePara.style.color = "white";
    compText.style.backgroundColor = "black";
    userText.style.backgroundColor = "black";
    compText.style.color = "white";
    userText.style.color = "white";
    msgContainer.style.backgroundColor = "black";
    myName.style.color = "white";
    myName.style.backgroundColor = "black";
    darkModeState = false;
  }
};

let darkMode = darkModeBtn.addEventListener("click", () => {
  darkModeCheck();
});

// darkModeBtn.addEventListener("click", (darkModeCheck) => {
//   body.style.backgroundColor = "white";
// });

let restartBtn = newGame.addEventListener("click", (showWinner) => {
  compScorePara.innerText = 0;
  compScore = 0;
  userScorePara.innerText = 0;
  userScore = 0;
  msg.innerText = "Play your move!";
  msg.style.backgroundColor = "#4d5359";
});

const drawGame = () => {
  console.log("Game was draw!");
  msg.innerText = "Game was draw, play again.";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log;
    msg.innerText = `You Win!, ${userChoice} beats ${compChoice}!`;
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    disable(location.reload(false));
  } else {
    msg.innerText = `You lose, ${compChoice} beats ${userChoice}!`;
    console.log("You lose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    disable(location.reload(false));
  }
  restartBtn(showWinner);
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log(`comp choice = ${compChoice}`);

  if (userChoice === compChoice) {
    //Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, paper
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
