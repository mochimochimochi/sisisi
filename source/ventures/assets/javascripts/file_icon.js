// file icon

$(function () {

  // ファイルアイコン　リンク一般
  function fileIcon() {
    // リンク無しリスト
    var noList = 'a.u-noIcon, .u-noIcon a';

    $('a[href^=http]').not('[href*="'+location.hostname+'"]').not(noList).attr('target','_blank').addClass("u-blank");
  	$('a[href$=pdf]').not(noList).attr('target','_blank').addClass("u-pdf");
  	$('a[href$=xls]').not(noList).attr('target','_blank').addClass("u-xls");
    $('a[href$=xlsx]').not(noList).attr('target','_blank').addClass("u-xls");
  	$('a[href$=doc]').not(noList).attr('target','_blank').addClass("u-doc");
    $('a[href$=docx]').not(noList).attr('target','_blank').addClass("u-doc");
    $('a[href$=ppt]').not(noList).attr('target','_blank').addClass("u-ppt");
    $('a[href$=pptx]').not(noList).attr('target','_blank').addClass("u-ppt");
  }



  fileIcon();

});
