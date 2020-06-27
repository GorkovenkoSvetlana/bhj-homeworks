const countdownTimer = function() {
    const timer = document.getElementById('timer');
    const intervalID = setInterval('Вы победили в конкурсе!', 1000);
    
    if (timer.textContent == 0) {
        alert ('Вы победили в конкурсе!');
        clearInterval(intervalID);
    } else {
        timer.textContent -= 1;
    }
}

setInterval(countdownTimer, 1000);

