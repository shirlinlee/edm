$(document)
    .ready(function() {
        $('.carousel').slick({ slidesToShow: 1, dots: false, infinite: false });
        $('.carousel_huge').slick({ slidesToShow: 1, dots: true, infinite: false, adaptiveHeight: true });
        $('body').on('click', '.hamburger', function() {
            $('.nav,.hamburger,.nav_bg').toggleClass('show');
        });
        $('body').on('click', '.more', function() {
            $('.lb,.nav_bg').toggleClass('show');
        })

        if ($(window).innerWidth() <= 450) {
            $('.mb_carousel').slick({ slidesToShow: 1, dots: false, infinite: false });

        }
    });