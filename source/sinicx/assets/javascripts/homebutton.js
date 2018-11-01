// home scroll button

$(function() {

  var $btn = $('.scrollBtn');

  $(window).scroll(function() {
    if(window.innerWidth > 480) {
      if ($(this).scrollTop() > 50) {
        $btn.fadeOut();
      } else {
        $btn.fadeIn();
      }
    }
  });
  
})
