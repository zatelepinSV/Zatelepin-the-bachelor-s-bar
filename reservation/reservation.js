$(document).ready(function () {
  $('.main-nav__reservation .button').click(function () {
    $('.reservation').css('display', 'block')
  });

  $('.btn-close, .bg-reservation').click(function () {
    $('.reservation').css('display', 'none')
  });

});