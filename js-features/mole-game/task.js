const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

  for (let i = 0; i < holes.length; i++) {

   holes[i].onclick = function() {
      if (holes[i].className.includes('hole_has-mole')) {
        dead.textContent ++;
    } else {
      lost.textContent ++;
  }
 
    if (dead.textContent == 10) {
    alert('Победа!');
    reset();

  } else if (lost.textContent == 5) {
    alert('Вы проиграли!');
    reset();
    };
   }
  }

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
}





