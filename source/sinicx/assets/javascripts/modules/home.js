const home = function() {
  // for IE11 Array.prototype.includesメソッド
  if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (len === 0) {
        return false;
      }

      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      while (k < len) {
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      return false;
    }
  });
}

  // members
  let $tgt = $('#membersList li'),
  $tgtAc = $('#membersList li.is-active'),
  $len = $tgt.length;
  // 乱数用
  let $randoms = [];
  let $min = 1, $max = $len;
  for(i = $min; i <= $max; i++){
    while(true){
      let tmp = intRandom($min, $max);
      if(!$randoms.includes(tmp)){
        $randoms.push(tmp);
        break;
      }
    }
  }
  function intRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 表示用
  $tgt.removeClass('is-active');
  for(i=0;i<3;i++){
    let $num = $randoms[i] - 1;
    $tgt.eq($num).addClass('is-active');
  }

};



module.exports = home;
