$(document).ready(function () {

    $('.acordion ul > li').on('click', function () {
        $('.acordion p').slideUp(700);
        $('.acordion h4').css('font-weight', "inherit");
        $('.acordionToggleBtn').removeClass('rotated');
        if ($(this).find('p').css('display') == 'none') {
            $(this).find('p').slideToggle(700);
            $(this).find('h4').css('font-weight', "700");
            $(this).find('.acordionToggleBtn').addClass('rotated');
        };
    });




});