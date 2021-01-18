$(document).scroll(function (e) {
  $(window).scrollTop() > 100 ? $('.menu').addClass('menu-scroll') : $('.menu').removeClass('menu-scroll');
});