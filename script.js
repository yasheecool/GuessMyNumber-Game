'use strict';
const playAgainBtn = document.querySelector('.btn.again');
const mainText = document.querySelector('.number');
const inputNum = document.querySelector('.guess');
const checkBtn = document.querySelector('.btn.check');
const guessText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');

let tryCounter = 0; //tracks the number of tries of user
let canPlayAgain = false;
let currScore = 0; //score of user in the current round
let highestScore = 0; //highest ever score of user

let winNumber = Math.floor(Math.random() * 20); //random number between 1 and 20

checkBtn.addEventListener('click', () => {
  if (inputNum.value && tryCounter < 21 && canPlayAgain === false)
    clickHandler();
  else if (tryCounter > 20) guessText.innerText = '🔄 Restart Game!';
  else if (!inputNum.value) guessText.innerText = '❌ No Number!';
});

playAgainBtn.addEventListener('click', () => {
  if (canPlayAgain) playAgain();
  else guessText.innerText = '❗️Complete this round first !';
});

function clickHandler() {
  const userInput = Number(inputNum.value); //tracking user input

  if (winNumber === 0) winNumber++;
  console.log(winNumber);

  if (winNumber !== userInput) loseHandler(userInput);
  else winHandler(userInput);
}

function loseHandler(userVal) {
  tryCounter += 1;
  scoreText.innerText = 20 - tryCounter;
  guessText.innerText = winNumber > userVal ? '📉 Too Low!' : '📈 Too High!';
  if (tryCounter === 20) canPlayAgain = true;
}

function winHandler(userVal) {
  document.querySelector('body').style.backgroundColor = '#21d00a'; //bg to green
  currScore = 20 - tryCounter; //tracking current score
  highestScore = highestScore > currScore ? highestScore : currScore;
  highScoreText.innerText = highestScore;
  guessText.innerText = '🎉 Correct Number!';
  mainText.innerText = userVal;
  canPlayAgain = true;
}

function playAgain() {
  tryCounter = 0;
  scoreText.innerText = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  mainText.innerText = '?';
  guessText.innerText = 'Start Guessing...!';
  inputNum.value = '';
  canPlayAgain = false;
  winNumber = Math.floor(Math.random() * 20); //random number between 1 and 20
}
