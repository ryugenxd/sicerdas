jQuery(function ($) {
    'use strict';

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.main-navbar').addClass("is-sticky");
        }
        else{
            $('.main-navbar').removeClass("is-sticky");
        }
    });
    
    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1200"
    });

    // Button Hover JS
    $(function() {
        $('.default-btn')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
    });

    // Nice Select JS
    $('select').niceSelect();
    
    // Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
    });

    // Banner Slider JS
	$('.banner-slider').owlCarousel({
		margin: 0,
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
    })

    // Banner Slider JS
	$('.banner-slide').owlCarousel({
		margin: 0,
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
    })
    
    // Banner Slider JS
	$('.banner-slide-three').owlCarousel({
		margin: 0,
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
    })
    
    // Team Slider
	$('.team-slider').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Testimonials Slider
	$('.testimonials-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 50,
		nav: false,
		autoplay: false,
		autoplayHoverPause: true,
		dots: true,
    })

    // Blog Slider
	$('.blog-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Dedicated Slider
	$('.dedicated-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Treatment Slider
	$('.treatment-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Doctors Slider
	$('.doctors-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Clients Slider
	$('.clients-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    })

    // Testimonials Three Slider
	$('.testimonials-three-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Doctors List Slider
	$('.doctors-list-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Blog Three Slider
	$('.blog-three-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    // Partner Slider
	$('.partner-slider').owlCarousel({
		loop: true,
		dots: false,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:2
			},
			576:{
				items:3
			},
			768:{
				items:4
			},
			1200:{
				items:5
			}
		}
	})

    // Gallery JS
	$('.covax-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

    // Accordion JS
	$('.accordion > li:eq(0) .title').addClass('active').next().slideDown();
	$('.accordion .title').click(function(j) {
		var dropDown = $(this).closest('li').find('.accordion-content');
		$(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('.title.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

    // PROJECTS PORTFOLIO
    try {
        var mixer = mixitup('#Container', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}

    // Preloader JS
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
    });

    // DateTimePicker
    $.datetimepicker.setLocale('pt-BR');
    $('#datetimepicker').datetimepicker();
    
    // Go to Top
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
	});	
    $(function(){
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });  
        
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  0);
        });
    });

	// Switch Btn
// 	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('covax_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('covax_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('covax_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();