$(document)
    .ready(function () {
        $('.carousel').slick({slidesToShow: 1, dots: false, infinite: false});
        $('.carousel_huge').slick({slidesToShow: 1, dots: true, infinite: false});

    });