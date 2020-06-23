
   
   const cookie = document.getElementById('cookie');
   const counter = document.getElementById('clicker__counter');
   
   cookie.onclick = function() {
     
    counter.textContent++;

    if (parseInt(counter.textContent) % 2 === 0) {
      cookie.width = 300;
    } else {
      cookie.width = 200;
    }

   };
