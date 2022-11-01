
 document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.parallax');
   var instances = M.Parallax.init(elems);
 });

  //Despliegue de menú

//  function myFunction() {
//
//    var x = document.getElementById("myLinks");
//    if (x.style.display === "block") {
//      x.style.display = "none";
//    } else {
//      x.style.display = "block";
//    }
//  }

   //Scroll to top button
$("#scrollTopButton").click(function (e) {
    e.preventDefault();  
    $("html, body").animate({ scrollTop: "0" }, 500);  
  });
 
  //Animación del h1 del inicio
  let inicio = 0;
  let texto = 'Telegramas Laborales y Cartas Documento en 24 hs.';
  let velocidad = 50;
  
  function escribir() {
  
  
    if (inicio < texto.length) {
      document.getElementById("h1").innerHTML += texto.charAt(inicio);
      inicio++;
     
      setTimeout(escribir, velocidad);
    }
  }
  
  escribir();
  

  //Pasos a seguir

  $(document).ready(function(){
  
  $("#desplegar1").click(function (e) {

    e.preventDefault();
  
    $(".toggle1").toggle("slow");
     
  });
  
  $("#desplegar2").click(function (e) {

    e.preventDefault();
  
    $(".toggle2").toggle("slow");
     
  });
  
  $("#desplegar3").click(function (e) {

    e.preventDefault();
  
    $(".toggle3").toggle("slow");
     
  });

  $("#desplegar4").click(function (e) {

    e.preventDefault();
  
    $(".toggle4").toggle("slow");
     
  });
  })