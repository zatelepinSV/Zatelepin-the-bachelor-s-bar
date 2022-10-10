$(document).ready(function () {
  "use strict";
  var link = $('.menu-link');
  var link_active = $('.main-nav__items');
  link.click(function (e) {
    e.preventDefault();
    link.toggleClass('menu-link_active');
    link_active.toggleClass('active');
  });
  $('.current').css('color', 'white');
});
