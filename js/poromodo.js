const pomodoroDisplay = document.getElementById('pomodoro-display');
const timeIntervalsSelect = document.getElementById('time-intervals');
const startPauseButton = document.getElementById('start-pause');
const resetButton = document.getElementById('reset');
const successCountSpan = document.getElementById('success-count');

let time = parseInt(timeIntervalsSelect.value); // Initial time in seconds
let timer;
let isPaused = true;
let successCount = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemain = seconds % 60;
  return `${minutes}:${secondsRemain < 10 ? '0' : ''}${secondsRemain}`;
}

function updateDisplay() {
  pomodoroDisplay.textContent = formatTime(time);
}

function toggleTimer() {
  if (isPaused) {
    startPauseButton.textContent = 'Pause';
    timer = setInterval(updateTime, 1000);
  } else {
    startPauseButton.textContent = 'Start';
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
    startPauseButton.textContent = 'Start';
    isPaused = true;
    successCount++;
    successCountSpan.textContent = successCount;
    alert('포모도로가 마무리되었습니다.');
  }
}

function resetTimer() {
  clearInterval(timer);
  isPaused = true;
  time = parseInt(timeIntervalsSelect.value); // Reset time based on selected value
  updateDisplay();
  startPauseButton.textContent = 'Start';
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
