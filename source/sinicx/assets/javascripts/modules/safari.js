const safari = function() {

let $userAgent = window.navigator.userAgent.toLowerCase();
// console.log($userAgent);
let $chrome = $userAgent.indexOf('chrome');
let $safari = $userAgent.indexOf('safari');
// console.log($chrome);
// console.log($safari);

if ($chrome == -1) {
  if($safari !== -1) {
    $('#mainImgArea').addClass('useSafari');
  }
}

};

module.exports = safari;
