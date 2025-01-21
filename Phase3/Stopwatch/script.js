// Select element

const timerDisplay = document.getElementById('timer')
const startButton = document.getElementById('start')
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")

let seconds = 0;
let interval = null;


// Format time as HH:MM:SS

function formatTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Start the stopwatch
function startStopwatch() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);
    }, 1000);
}

function stopwatch(){
    clearInterval(interval);
    interval = null;
}

// Reset the stopwatch
function resetStopwatch() {
    seconds = 0;
    clearInterval(interval);
    timerDisplay.textContent = formatTime(seconds);
}

// Attach event listeners
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopwatch);
resetButton.addEventListener("click", resetStopwatch);
