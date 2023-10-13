const brands = [
    "abbank.svg", "bacabank.svg", "bhin.svg", "BIDV.svg", "british.svg", "cfvg.svg",
    "flamingo.svg", "flc.svg", "fpt.svg", "hdmon.svg", "ila.svg", "jetstar.svg",
    "kinder.png", "masteri.svg", "mbbank.svg", "mobifone.svg", "qantas.svg",
    "rakuten.svg", "rmit.svg", "sendo.svg", "sungrand.svg", "sunpremier.svg",
    "techcom.svg", "thaiair.svg", "tigerair.svg", "topica.svg", "vatgia.svg",
    "vib.svg", "viettel.svg", "vina.svg", "vjair.svg", "vnpt.svg"
];

const brandSlider = document.getElementById('brandSlider');

brands.forEach(brand => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <a href="#"><img class="clients" src="/images/brand/clients/${brand}" alt=""></a>
    `;
    brandSlider.appendChild(item);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});



/* CHANGE LANG */
function changeLanguage(locale) {
    fetch(`/setLanguage/${locale}`, { method: 'GET' })
        .then(response => {
            if (response.ok) {
                window.location.reload();
            }
        })
        .catch(error => console.error('Error changing language:', error));
}

(function ($) {

    "use strict";


    jQuery(document).on('ready', function () {


        /*===============================  
             Sticky 
        ================================*/
        jQuery(window).on('scroll', function (event) {
            var scroll = jQuery(window).scrollTop();
            if (scroll < 110) {
                jQuery(".header-nav").removeClass("sticky");
            } else {
                jQuery(".header-nav").addClass("sticky");
            }
        });

        /*===============================  
             Mobile Menu 
        ================================*/
        jQuery(".navbar-toggler").on('click', function () {
            jQuery(this).toggleClass('active');
        });

        jQuery(".navbar-nav a").on('click', function () {
            jQuery(".navbar-toggler").removeClass('active');
        });
        var subMenu = jQuery(".sub-menu-bar .navbar-nav .sub-menu");

        if (subMenu.length) {
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <i class="fal fa-angle-down"></i> </button>';
            });

            var subMenuToggler = jQuery(".sub-menu-bar .navbar-nav .sub-nav-toggler");

            subMenuToggler.on('click', function () {
                jQuery(this).parent().parent().children(".sub-menu").slideToggle();
                return false
            });

        }

        /*===============================  
             side menu Project 1
        ================================*/
        jQuery('.canvas_open').on('click', function () {
            jQuery('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
        });

        jQuery('.canvas_close,.off_canvars_overlay').on('click', function () {
            jQuery('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
        });

        var $offcanvasNav = jQuery('.offcanvas_main_menu'),
            $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
        $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

        $offcanvasNavSubMenu.slideUp();

        $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.siblings('ul').slideUp('slow');
                } else {
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                    $this.siblings('ul').slideDown('slow');
                }
            }
            if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
                $this.parent().toggleClass('menu-open');
            } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
                $this.toggleClass('menu-open');
            }
        });

        /*===============================  
             screenshot ACTIVE SLICK JS
        ================================*/
        var Slider8 = jQuery('.brand-slider');
        Slider8.slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            swipe: true,
            rows: 3,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 1000, // Tăng thời gian chuyển đổi giữa các slide
            speed: 3000, // Tăng tốc độ chuyển đổi
            ease: 'easeInOutCubic', // Sử dụng easeInOutCubic để làm mượt hơn
            swipeToSlide: true, // Cho phép chuyển slide một cách nhịp nhàng
            
        });

        /*===============================  
             COUNTER Active
        ================================*/
        if (jQuery('.count').length) {
            jQuery('.count').appear(function () {
                jQuery(this).prop('Counter', 0).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
            }, {
                accY: 0
            });
        }
        /*===============================  
             wow js
        ================================*/

        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 250, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }





        /*===============================  
             Back to top
        ================================*/

        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > 600) {
                jQuery('.back-to-top').fadeIn(200)
            } else {
                jQuery('.back-to-top').fadeOut(200)
            }
        });
        jQuery('.back-to-top').on('click', function (event) {
            jQuery('html, body').animate({
                scrollTop: 0,
            }, 1500);
            event.preventDefault();
        });

    });


    jQuery(window).on('load', function (event) {

        /*===============================  
             Prealoder 
        ================================*/
        jQuery('.preloader').delay(750).fadeOut(500);
    });

})(jQuery);