const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
  let hole = document.getElementById('hole') + index;
  return hole;
}

for (let i = 1; i < 10; i++) {

  let hole = getHole(i);
   
   hole.onclick = function() {
      if (hole.className.includes('hole_has-mole')) {
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





