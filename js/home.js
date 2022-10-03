$(document).ready(function () {
  var link = $('.menu-link');
  var link_active = $('.menu-link_active');

  link.click(function () {
    link.toggleClass('menu-link_active');
  });
  link_active.click(function () {
    removeClass('menu-link_active');
  });
  $('.main-nav__items [href]').each(function () {
    if (this.href == window.location.href) {
      $(this).addClass("active");
    }
  });
});
$('.current a').css('color', 'white');