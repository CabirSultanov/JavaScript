$(function () {
    $('#menu li').on('mouseenter', (e) => {
        $(e.currentTarget).children('ul').fadeIn(200);
    });

    $('#menu li').on('mouseleave', (e) => {
        $(e.currentTarget).children('ul').fadeOut(200);
    });
});
