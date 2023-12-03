


$(document).ready(function () {
    // Sidebar toggle behavior
    const toggler = document.querySelector('.btn');
    toggler.addEventListener('click', function () {
        document.querySelector('#sidebar').classList.toggle('collapsed');
    });

    // Tooltip
    // $('.tteb-popup-content').hide();
    $('.ellipsis-btn').on('click', function () {
        $(this).siblings('.tteb-popup-content').toggle();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.ellipsis-btn').length) {
            $('.tteb-popup-content').hide();
        }
    });

    // Socila Media Slider
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

    // Socila Media Slider
        $('.about-hero-img-wrapper').slick({
            dots: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // Program Slider

});