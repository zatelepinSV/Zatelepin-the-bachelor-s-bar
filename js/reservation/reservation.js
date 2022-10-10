$(document).ready(function (e) {
  "use strict";
  $('.reservation-btn').click(function () {
    $('.reservation').css('display', 'block');
  });
  $('.btn-close, .bg-reservation').click(function () {
    $('.reservation').css('display', 'none');
  });

  let buttonUp = $('.up');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 100) {
      buttonUp.removeClass('hide');
    } else {
      buttonUp.addClass('hide');
    }
  });
  buttonUp.click(function () {
    $('html').animate({scrollTop:0}, 1000);
  });

});