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

    $('body').on('click', '.bg_trans_golden', function () {
        $('.nav,.hamburger,.nav_bg').removeClass('show');
    });

    $('body').on('click', '.close, .bg_trans_golden.show_lb', function () {
        $('.lb,.nav_bg').removeClass('show show_lb');
    })

    $('body').on('click', '.article', function () {
        if ($(this).find('.btn').is(':visible')) 
            $('.lb,.nav_bg').addClass('show show_lb');
        }
    )

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
        //是版型三
        if ($('.parallax').length === 1 && $(window).innerWidth() > 768) {
            var scroll = $(window).scrollTop();
            var windowH = $(window).innerHeight();
            var point = (scroll - windowH) / 1 - 190;

            if (point >= 500) {
                point = 500;
            }

            if (point <= -30) {
                point = -30;
            }

            // console.log(point);

            $('.parallax').css({
                'transform': 'translate(0,' + point + 'px)'
            })

        }
    });

    // if (navigator.msSaveBlob) {     console.log('ie');     return
    // navigator.msSaveBlob(blob, fileName); } } else {}
});