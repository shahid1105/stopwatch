const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");


let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalID;


function start() {
    intervalID = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 16.6666666667);
  }
  
  function stop() {
    clearInterval(intervalID);
  }
  
  function reset() {
    clearInterval(intervalID);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = "00:00:00";
  }

  
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
