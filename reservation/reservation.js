$(document).ready(function (e) {

  $('.reservation-btn').click(function () {
    $('.reservation').css('display', 'block')
  });

  $('.btn-close, .bg-reservation').click(function () {
    $('.reservation').css('display', 'none')
  });

});