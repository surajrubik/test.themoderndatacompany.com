import {tns} from '../tinyslider/tiny-slider.js';

// script(type="module", src="js/sliders/product-slider.js")


var slider = tns({
    container: '.js-intro-slider',
    items:1,
    mode: 'gallery',
    loop:false,
    gutter: 0,
    nav:true,
    controls: false,
    navSpeed: '800',
    dotsSpeed: '800',
    autoplayHoverPause: false,
    mouseDrag: false,
    fallbackEasing: "easeInOutCubic",
    navigationText : false,
    autoplay: true,
    autoplayTimeout: '8000',
    speed: '800',
    rewind: true,
    autoHeight: true,
    controlsText: ["<i class='icon-chevron-slim-left'></i>","<i class='icon-chevron-slim-right'></i>"],
    // responsive: {
    //     769: {
    //         items: 3,
    //         edgePadding: 0,
    //         controls: true
    //     },
    //     1025: {
    //         items: 4,
    //         edgePadding: 0,
    //         controls: true
    //     },
    //     1261: {
    //         items: 5,
    //         edgePadding: 0,
    //         controls: true
    //     }
    // }
});
