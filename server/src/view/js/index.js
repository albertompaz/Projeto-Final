/* $("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
 */

if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
  var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
}


$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar-wrapper').toggleClass('active');
  });

});

/* SCROLL SUAVE */
jQuery(document).ready(function($) { 
  $(".scroll").click(function(event){        
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
 });
});

document.getElementById('texto').innerHTML = usuarioLogado.nome
