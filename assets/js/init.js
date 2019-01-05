$(document)
    .ready(function() {
        $('.carousel').slick({ slidesToShow: 1, dots: false, infinite: false });
        $('.carousel_huge').slick({ slidesToShow: 1, dots: true, infinite: false, adaptiveHeight: true });
        $('body').on('click', '.hamburger', function() {
            $('.nav,.hamburger,.nav_bg').toggleClass('show');
        })
    });