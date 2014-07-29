$(function () {
//    captions: true
//    $('.slider_top').bxSlider({
//        infiniteLoop: true,
//        hideControlOnEnd: true
//    });
    $('.slider_responses').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        slideWidth: 445,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 20
    });
    $('.slider_partners').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        slideWidth: 125,
        minSlides: 7,
        maxSlides: 7,
        slideMargin: 15
    });
    $('.number').counterUp({
        delay: 10, // the delay time in ms
        time: 2500 // the speed time in ms
    });
    $('.slider_main').fractionSlider({
        'fullWidth': 			false,
        'controls': 			true,
        'pager': 				true,
        'responsive':  			true,
        'dimensions':  			'1000,455'
    });
});