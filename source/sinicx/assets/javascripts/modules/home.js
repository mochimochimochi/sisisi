const home = function() {

  // members
  let $tgt = $('#membersList li'),
  $tgtAc = $('#membersList li.is-active'),
  $len = $tgt.length;

  /** 重複チェック用配列 */
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
  /** $min以上$max以下の整数値の乱数を返す */
  function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
  }

  console.log($randoms)

  $tgt.removeClass('is-active');
  for(i=0;i<3;i++){
    let $num = $randoms[i] - 1;
    console.log($num)
    $tgt.eq($num).addClass('is-active');
  }

};



module.exports = home;
