$(document).ready(function() {
    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger--active');
        $('.header__nav').toggleClass('header__nav--active');
        $('.intro').toggleClass('intro--active');
    })
 

    $('.slider').slick({
        prevArrow: '<svg class="slider__back" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 58"><defs><path id="gb7wa" d="M47.986 1601.982l28.303 29.009 4.502-4.614-23.798-24.392 23.798-24.358-4.499-4.618zm21.223 0l28.303 29.009 4.502-4.614-23.798-24.392 23.798-24.358-4.499-4.618z"/></defs><g><g transform="translate(-48 -1573)"><use fill="#0e88f3" xlink:href="#gb7wa"/></g></g></svg>',
        nextArrow: '<svg class="slider__next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 54 58"><defs><path id="tr3aa" d="M2434.708 1623.991l-4.5-4.618 23.799-24.358-23.798-24.392 4.502-4.614 28.303 29.01zm-21.223 0l-4.499-4.618 23.798-24.358-23.798-24.392 4.502-4.614 28.303 29.01z"/></defs><g><g transform="translate(-2409 -1566)"><use fill="#0e88f3" xlink:href="#tr3aa"/></g></g></svg>',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }]
    });
    $('[data-fancybox="gallery"]').fancybox({
        
    }); 
})  


