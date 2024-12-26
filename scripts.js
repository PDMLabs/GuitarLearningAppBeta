// Metronome Functionality
let metronomeInterval;

document.getElementById('start-metronome').addEventListener('click', () => {
    const audio = new Audio('audio/metronome-click.mp3'); // Add your metronome click sound
    metronomeInterval = setInterval(() => audio.play(), 600); // Adjust speed (600ms = 100 bpm)
});

document.getElementById('stop-metronome').addEventListener('click', () => {
    clearInterval(metronomeInterval);
});

// Timer Functionality
function startTimer() {
    const minutes = parseInt(document.getElementById('timer').value);
    const display = document.getElementById('timer-display');
    let time = minutes * 60;

    if (isNaN(minutes) || minutes <= 0) {
        display.textContent = "Please enter a valid time!";
        return;
    }

    const interval = setInterval(() => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        display.textContent = `Time Remaining: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            display.textContent = "Time's up! Practice complete.";
        }
    }, 1000);
}
