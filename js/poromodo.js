const pomodoroDisplay = document.getElementById('pomodoro-display');
const timeIntervalsSelect = document.getElementById('time-intervals');
const startPauseButton = document.getElementById('start-pause');
const resetButton = document.getElementById('reset');
const successCountSpan = document.querySelector(
  '#success-count span:first-child'
);

let time = parseInt(timeIntervalsSelect.value);
let timer;
let isPaused = true;
let successCount = 0;
let currentDate = new Date();

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemain = seconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds =
    secondsRemain < 10 ? `0${secondsRemain}` : secondsRemain;
  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateDisplay() {
  pomodoroDisplay.textContent = formatTime(time);
}

function toggleTimer() {
  if (isPaused) {
    startPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    timer = setInterval(updateTime, 1000);
  } else {
    startPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    clearInterval(timer);
  }
  isPaused = !isPaused;
}

function updateTime() {
  if (time > 0) {
    time--;
    updateDisplay();
  } else {
    clearInterval(timer);
    startPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    isPaused = true;
    const now = new Date();
    if (now.getDate() !== currentDate.getDate()) {
      currentDate = now;
      successCount = 0;
    } else {
      successCount++;
    }
    successCountSpan.textContent = successCount;
    alert('포모도로가 마무리되었습니다.');
  }
}

function resetTimer() {
  clearInterval(timer);
  isPaused = true;
  time = parseInt(timeIntervalsSelect.value);
  updateDisplay();
  startPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}

timeIntervalsSelect.addEventListener('change', () => {
  if (isPaused) {
    time = parseInt(timeIntervalsSelect.value);
    updateDisplay();
  }
});

startPauseButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
