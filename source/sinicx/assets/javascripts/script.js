let $ = require('jQuery');
let gnav = require('./modules/gnav.js');
let footer = require('./modules/footer.js');
let burger = require('./modules/burger.js');
let mainImgText = require('./modules/mainimgtext.js');
let safari = require('./modules/safari.js');
let modal = require('./modules/modal.js');
let home = require('./modules/home.js');


// let slider = require('./modules/slider.js');

//jQuery
$(function(){
  // gnav
  gnav();
  // burgermenu
  burger();
  // footer
  footer();
  // for safari
  safari();
  // modal
  modal();

  // home
  if($('body').hasClass('home')) {
    home();
  }


});

$(window).on('load',function() {
  mainImgText();
});
