const slider = function() {

  $('#mainSlider').slick({
    // autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false
  });

};

module.exports = slider;
