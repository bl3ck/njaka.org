// Header JS
(function ($) {
    $(function () {
        $('nav ul li > a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
        $('#nav-toggle').click(function () {
            if ($('nav ul').hasClass('aoinics-mobile')) {
                $('nav ul').removeClass('aoinics-mobile');
                $('nav ul').toggle();
                $('nav ul').addClass('hide')
            }
            else {
                $('nav ul').addClass('aoinics-mobile')
                // $('.main-menu').addClass('blue-bg');
            }
        });
    });
})(jQuery);
window.onscroll = function () { myFunction() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


$(document).ready(function () {
    AOS.init({
        useClassNames: false,
        disable: ['phone', 'tablet', 'mobile']    
    });

    // Partners JS
    
    $('.quote-owl-carousel').owlCarousel({
        autoplay: true,
        navigation: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    $('.vp .accordion').addClass('active');
    $('.vp .vp-body').addClass('show');

});
