$(document).ready(function () {

    $('.acordion ul > li').on('click', function () {
        $('.acordion p').slideUp(700);
        $('.acordionToggleBtn').removeClass('rotated');
        if ($(this).find('p').css('display') == 'none') {
            $(this).find('p').slideToggle(700);
            $(this).find('.acordionToggleBtn').addClass('rotated');
        };
    });




});