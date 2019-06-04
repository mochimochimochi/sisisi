// smooth scroll

$(function() {
  let $not = '.membersModal';

  $('a[href^="#"]').not($not).click(function(){
    var headerHight = 57;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $('html, body').animate({scrollTop:position}, speed, "swing");
    return false;
  });
})
