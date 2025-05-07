
const deadline = new Date('May 12, 2025 23:59:59').getTime();

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "It's time!";
    }
}

const interval = setInterval(updateCountdown, 1000);
