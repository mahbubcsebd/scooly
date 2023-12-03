$(document).ready(function () {
    /* =========================================================
        Sticky Header
     =========================================================*/
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 200) {
            $('.header').addClass('sticky');
            $('.resp-none').addClass('scroll-none');
        } else {
            $('.header').removeClass('sticky');
            $('.resp-none').removeClass('scroll-none');
        }
    });

    /* =========================================================
        Home Marquee Slider
     =========================================================*/

    $('.slick-marquee').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });

    /* =========================================================
        Socila Media Slider
     =========================================================*/
    $('#social-media-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#social-media-slider-prev-1'),
        nextArrow: $('#social-media-slider-next-1'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    /* =========================================================
        About Slider
     =========================================================*/
    $('.about-hero-img-wrapper').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /* =========================================================
        Scroll To Top
     =========================================================*/
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $(window).scroll(function () {
        var scrollToTopBtn = $('.scrollToTop');
        if ($(window).scrollTop() > 200) {
            scrollToTopBtn.show();
        } else {
            scrollToTopBtn.hide();
        }
    });
});