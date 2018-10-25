const burger = function() {

  navP();
  bodyPd();
  acdMenu();

  // sp button
  $('#l-nav__btn').on('click', function () {
      $(this).toggleClass('is-trigger');
      $('.l-header').toggleClass('is-fixed');
      $('#l-nav__layer').toggleClass('is-fixed').fadeToggle(100);
      $('#l-nav').toggleClass('is-open').fadeToggle(300);
      // acdMenu
      $('#l-nav .acdMenu dt').removeClass('is-open');
      $('#l-nav .acdMenu dd').removeClass('is-open');
      $('#l-nav .acdMenu dd').hide();
  });

  // リサイズ時
  $(window).on('resize',() => {
    navP();
    bodyPd();
    navSpReset();
    if(window.innerWidth <= 1000) {
      $('#l-nav .acdMenu').parent('li').css('height','auto');
    }
  });

};

// nav position
function navP() {
  if(window.innerWidth <=1000) {
    let $np = $('header').outerHeight();
    $('#l-nav').css({'top':$np});
  } else {
    $('#l-nav').css({'top':''});
  }
}

// body padding
function bodyPd() {
  let $np = $('header').outerHeight();
  if(window.innerWidth <=1000) {
    $('body').css('padding-top',$np);
  } else {
    $('body').css('padding-top',0);
  }
}

// navSp reset
function navSpReset() {
  if(window.innerWidth > 1000) {
    $('#l-nav').css('display','');
    $('#l-nav__btn').removeClass('is-trigger');
  }
}

// accordion menu
function acdMenu() {
  if(window.innerWidth <= 1000) {
    $('#l-nav .acdMenu').parent('li').css('height','auto');
  }
  $('#l-nav .acdMenu dt').on('click', function (e) {
    if(window.innerWidth <= 1000) {
      $(this).toggleClass('is-open');
      $(this).next('dd').toggleClass('is-open');
      $(this).next('dd').slideToggle();
      e.stopPropagation();
    }
  });
}



module.exports = burger;
