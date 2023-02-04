$(function () {
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.arrow-left').click(function(){
        $('.intro-block .main-slider').slick('slickPrev');
    })

    $('.arrow-right').click(function(){
        $('.intro-block .main-slider').slick('slickNext');
    })

    $(document).on('click', '.btn-up', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});