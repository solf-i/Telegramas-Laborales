
$(document).ready(function() {
  

var i = 0;
var txt = 'Su mensaje no fue enviado, por favor, intente nuevamente. Atentamente, Telegramas Laborales.';
var speed = 50; 


function error() {
  if (i < txt.length) {
    document.getElementById("msjError").innerHTML += txt.charAt(i);
    i++;
   
    setTimeout(error, speed);
  }
}

error();

})


  