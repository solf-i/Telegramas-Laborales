
$(document).ready(function() {
  

var i = 0;
var txt = 'Gracias por tu consulta! Nos contactaremos en 24 hs. hábiles por e-mail ó teléfono. Atentamente, Telegramas Laborales.';
var speed = 50; 


function agradecer() {
  if (i < txt.length) {
    document.getElementById("msjGracias").innerHTML += txt.charAt(i);
    i++;
   
    setTimeout(agradecer, speed);
  }
}

agradecer();

})


  