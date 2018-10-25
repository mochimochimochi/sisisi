let $ = require('jQuery');
let gnav = require('./modules/gnav.js');
let footer = require('./modules/footer.js');
let burger = require('./modules/burger.js');
let mainImgText = require('./modules/mainimgtext.js');


// let slider = require('./modules/slider.js');

//jQuery
$(function(){
  // gnav
  gnav();
  // burgermenu
  burger();
  // footer
  footer();

});

$(window).on('load',function() {
  mainImgText();
});
