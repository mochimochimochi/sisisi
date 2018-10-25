const gnav = function() {

  gnavCurrent();
  spBind();

  // resize 横幅が変わった時だけ実行
  $(function() {
    let timer = false;
    let winWidth = $(window).width();
    let winWidth_resized;

    $(window).on("resize", function() {
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        winWidth_resized = $(window).width();
        if (winWidth != winWidth_resized) {

          spBind();

          // risize後のwidth代入
          winWidth = $(window).width();
        }
      }, 200);
    });
  });

};



// current
function gnavCurrent() {
  let $p = location.pathname;
  $('#l-nav a').each(function () {
    let $href = $(this).attr('href');
    if($href === $p) {
      $(this).addClass('is-current');
    }
  });
}

// spMenu
function spBind() {
  if(window.innerWidth <= 1000) {
    spMenuFixed();
    $('body').append('<div id="l-nav__layer" class="l-nav__layer"></div>');
  } else {
    $(window).off('scroll.spMenuFixed');
  }
}

// spMenu スクロール時挙動
function spMenuFixed() {
  let $navH = $('.l-header').height();
  let $pos = 0;
  $(window).on('scroll.spMenuFixed', function() {
    let $crt = $(this).scrollTop();
    if($crt > $pos) {
      if($(window).scrollTop() >= 160) {
        $('.l-header').not('.is-fixed').css('top','-'+ $navH + 'px');
        // rmSpClass();
      }
    } else {
      $('.l-header').css('top',0 + 'px');
    }
    $pos = $crt;
  });
}

// spMenu用class削除
// function rmSpClass() {
//   $('#l-nav__btn').removeClass('is-trigger');
//   $('#l-nav').css('display','');
// }

module.exports = gnav;
