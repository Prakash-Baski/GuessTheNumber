'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check--btn').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.secret--number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#19A7CE';
    document.querySelector('.secret--number').style.width = '15rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score').textContent = highScore;
    }
    // When the guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > number ? 'Too High' : 'Too Low';
      displayMessage(guess > number ? 'Too High' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#E76161';
      document.querySelector('.secret--number').style.width = '15rem';
    }
    // When the guess is high
  } /*else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#E76161';
      document.querySelector('.secret--number').style.width = '15rem';
    }

    // When the guess is low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#E76161';
      document.querySelector('.secret--number').style.width = '15rem';
    }
  }*/
});

document.querySelector('.reset--btn').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.secret--number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#2e3840';
  document.querySelector('.secret--number').style.width = '10rem';
});
