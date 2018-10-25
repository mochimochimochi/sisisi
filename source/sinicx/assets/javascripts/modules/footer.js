const footer = function() {
  let $wH = window.innerHeight;
  let $mH = $('main').innerHeight();
  let $fH = $('footer').innerHeight();

  if($wH > $mH + $fH) {
    $('footer').addClass('is-fixed');
  } else {
    $('footer').removeClass('is-fixed');
  }

};

module.exports = footer;
