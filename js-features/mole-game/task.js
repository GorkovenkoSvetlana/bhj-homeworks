const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


function getHole(index) {
  let holeArr = document.getElementsByClassName('hole');
  return holeArr;
}

for (let i = 1; i < 10; i++) {

  let hole = getHole(index);
   
   hole.onclick = function() {
      if (hole.className.includes('hole_has-mole')) {
        dead.textContent ++;
    } else {
      lost.textContent ++;
  }
 
  
    if (dead.textContent == 10) {
    alert('Победа!');
    dead.textContent = 0;
    lost.textContent = 0;
  } else if (lost.textContent == 5) {
    alert('Вы проиграли!');
    dead.textContent = 0;
    lost.textContent = 0;
 };
}
}





