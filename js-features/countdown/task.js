const countdownTimer = function() {
    const timer = document.getElementById('timer');
    
    if (timer.textContent == 0) {
        clearInterval(countdownTimer);
        alert('Вы победили в конкурсе!');
    } else {
        timer.textContent -= 1;
    }
}

setInterval(countdownTimer, 1000);