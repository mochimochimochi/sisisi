// tab

$(function() {
    var index = $('.p-tab__title .p-tab__title__item.select').index();
    $('.p-tab__content').eq(index).show();

    $('.p-tab__title .p-tab__title__item').click(function() {
        var index = $('.p-tab__title .p-tab__title__item').index(this);
        $('.p-tab__content').css('display','none');
        $('.p-tab__content').eq(index).fadeIn();
        $('.p-tab__title .p-tab__title__item').removeClass('select');
        $(this).addClass('select')
    });
});
