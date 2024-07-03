let score = 0;
let timeLeft = 10;
let timerId;
let gameStarted = false;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');
const restartButton = document.getElementById('restartButton');

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    gameStarted = false;
    clickButton.disabled = false;
    clickButton.textContent = 'Click Me!';
    restartButton.style.display = 'none';
}

function countdown() {
    if (timeLeft === 0) {
        clearInterval(timerId);
        endGame();
    } else {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    }
}

function handleClick() {
    if (!gameStarted) {
        gameStarted = true;
        timerId = setInterval(countdown, 1000);
    }
    score++;
    scoreDisplay.textContent = score;
}

function endGame() {
    clickButton.disabled = true;
    clickButton.textContent = 'Game Over!';
    restartButton.style.display = 'block';
}

function restartGame() {
    clearInterval(timerId);
    startGame();
}

clickButton.addEventListener('click', handleClick);
restartButton.addEventListener('click', restartGame);
window.addEventListener('load', startGame);