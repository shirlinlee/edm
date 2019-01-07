var $body = (window.opera)
    ? (document.compatMode == "CSS1Compat"
        ? $('html')
        : $('body'))
    : $('html,body');

$(document).ready(function () {
    $('.carousel').slick({slidesToShow: 1, dots: false, infinite: false});
    $('.carousel_huge').slick({slidesToShow: 1, dots: true, infinite: false, adaptiveHeight: true});

    $('body').on('click', '.hamburger, .nav.show li', function () {
        $('.nav,.hamburger,.nav_bg').toggleClass('show');
    });

    $('body').on('click', '.more, .close', function () {
        $('.lb,.nav_bg').toggleClass('show show_lb');
    })

    // if ($(window).innerWidth() <= 450) {
    $('.mb_carousel').slick({
        settings: "unslick",
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 2560,
                settings: "unslick"
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#banner').on('click', '.arrow', function () {
        $body.animate({
            scrollTop: $('#sec1')
                .offset()
                .top
        }, 500);
    });

    $('#top').on('click', 'li', function () {
        var index = $(this).index();
        if (index === 0) {
            $body.animate({
                scrollTop: 0
            }, 500);
        } else {
            $body.animate({
                scrollTop: $('#sec' + index)
                    .offset()
                    .top
            }, 700);
        }

    });

    $('#footer').on('click', '.goTop', function () {
        $body.animate({
            scrollTop: 0
        }, 500);
    });

    var isScroll = false;

    $(window).scroll(function (event) {

        if (!isScroll) {
            isScroll = true;
            $('.goTop').addClass('show');
            setTimeout(function () {
                $('.goTop').removeClass('show');
                isScroll = false;
            }, 2000)
        }
    });

    // } else {}
});