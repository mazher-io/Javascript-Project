const startBtn = document.getElementById('start-btn');
const testArea = document.getElementById('test-area');
const typingArea = document.getElementById('typing-area');
const paragraph = document.getElementById('paragraph');
const timerDisplay = document.getElementById('time-left');
const results = document.getElementById('results');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');

const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes a man perfect.",
  "JavaScript is a versatile programming language.",
  "Typing fast is a valuable skill in today's world."
];

let timeLeft = 30;
let timer;
let totalTyped = 0;
let correctTyped = 0;

// Start Test
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  testArea.classList.remove('hidden');
  typingArea.value = '';
  results.classList.add('hidden');

  // Reset variables
  totalTyped = 0;
  correctTyped = 0;
  timeLeft = 30;
  timerDisplay.textContent = timeLeft;

  // Display random paragraph
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  paragraph.textContent = paragraphs[randomIndex];

  // Enable typing area and focus
  typingArea.disabled = false;
  typingArea.focus();

  // Start Timer
  timer = setInterval(updateTimer, 1000);
});

// Update Timer
function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timer);
    endTest();
  }
}

// Track Typing
typingArea.addEventListener('input', () => {
  const typedText = typingArea.value;
  const originalText = paragraph.textContent;

  totalTyped = typedText.length;
  correctTyped = 0;

  // Check correct characters
  for (let i = 0; i < totalTyped; i++) {
    if (typedText[i] === originalText[i]) {
      correctTyped++;
    }
  }
});

// End Test
function endTest() {
  typingArea.disabled = true;
  results.classList.remove('hidden');

  const wordsTyped = typingArea.value.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / 30) * 60);
  const accuracy = Math.round((correctTyped / totalTyped) * 100);

  wpmDisplay.textContent = isNaN(wpm) ? 0 : wpm;
  accuracyDisplay.textContent = isNaN(accuracy) ? 0 : accuracy;

  startBtn.disabled = false;
}
