;
(function($) {
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    //$(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };

    if (window.location.hash == "#demo") {
        $('#enterprise-demo-modal').modal('show');
        location.hash = "";
    }

    var pageUri = window.location.pathname;
    var arrNavbarFade = ["/email-security/", "/secure-file-transfer/", "/help-desk-integrations/", "/dropzone/", "/developer-api/"];
    if (includes(arrNavbarFade, pageUri) || pageUri == "/" || pageUri == "/index.html") {
        navbarFixed();
    } else {
        $(".header_area").addClass("navbar_fixed");
    }

    if (pageUri == "/features.html") {
        $('#features-menu').addClass("active");
    } else if (pageUri == "/pricing.html") {
        $('#pricing-menu').addClass("active");
    } else if (pageUri == "/how-it-works.html") {
        $('#howitworks-menu').addClass("active");
    }

    function offcanvasActivator() {
        if ($('.bar_menu').length) {
            $('.bar_menu').on('click', function() {
                $('#menu').toggleClass('show-menu')
            });
            $('.close-menu').on('click', function() {
                $('#menu').removeClass('show-menu')
            })
        }
    }
    offcanvasActivator();

    $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
    });
    $('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
    });

    $(window).on("load", function() {
        if ($('.mega_menu_two .dropdown-menu').length) {
            $(".mega_menu_two .dropdown-menu").mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0,
            });
        }
    });

    /*--------- WOW js-----------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }
    wowAnimation()

    /*===========Start Service Slider js ===========*/
    function serviceSlider() {
        var service_slider = $(".service_carousel");
        if (service_slider.length) {
            service_slider.owlCarousel({
                loop: true,
                margin: 15,
                items: 4,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass: true,
                nav: true,
                dots: false,
                stagePadding: 100,
                navText: [, '<i class="ti-arrow-left"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    578: {
                        items: 2,
                        stagePadding: 0,
                    },
                    992: {
                        items: 3,
                        stagePadding: 0,
                    },
                    1200: {
                        items: 3,
                    }
                },
            })
        }
    }
    serviceSlider();
    /*===========End Service Slider js ===========*/

    /*===========Start about_img_slider js ===========*/
    function aboutSlider() {
        var reviews_slider2 = $(".about_img_slider");
        if (reviews_slider2.length) {
            reviews_slider2.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass: true,
            })
        }
    }
    aboutSlider();
    /*=========== End about_img_slider js ===========*/


    /*===========Start feedback_slider js ===========*/
    function feedbackSlider() {
        var feedback_slider = $(".feedback_slider");
        if (feedback_slider.length) {
            feedback_slider.owlCarousel({
                loop: true,
                margin: 20,
                items: 3,
                nav: false,
                center: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                //                navText: [,'<i class="ti-angle-left"></i><i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 3,
                    }
                },
            })
        }
    }
    feedbackSlider();

    /*===========Start feedback_slider js ===========*/
    function feedbackSlider_two() {
        var feedback_sliders = $("#fslider_two");
        if (feedback_sliders.length) {
            feedback_sliders.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: [, '<i class="ti-angle-left"></i><i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 2,
                    }
                },
            })
        }
    }
    feedbackSlider_two();


    function feedbackSlider_three() {
        var feedback_sliders_three = $("#fslider_three");
        if (feedback_sliders_three.length) {
            feedback_sliders_three.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 3,
                    }
                },
            })
        }
    }
    feedbackSlider_three();

    /*=========== End feedback_slider js ===========*/

    /*===========Start Service Slider js ===========*/
    function testimonialSlider() {
        var testimonialSlider = $(".testimonial_slider");
        if (testimonialSlider.length) {
            testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2500,
                autoplaySpeed: false,
                responsiveClass: true,
                nav: true,
                dot: true,
                stagePadding: 0,
                navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                navContainer: ".agency_testimonial_info"
            })
        }
    }
    testimonialSlider();

    /*===========End Service Slider js ===========*/

    /*===========Start app_testimonial_slider js ===========*/
    function app_testimonialSlider() {
        var app_testimonialSlider = $(".app_testimonial_slider");
        if (app_testimonialSlider.length) {
            app_testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2000,
                autoplaySpeed: true,
                responsiveClass: true,
                nav: true,
                dot: true,
                navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                navContainer: '.nav_container'
            })
        }
    }
    app_testimonialSlider();
    /*===========End app_testimonial_slider js ===========*/


    /*===========Start app_testimonial_slider js ===========*/
    function appScreenshot() {
        var app_screenshotSlider = $(".app_screenshot_slider");
        if (app_screenshotSlider.length) {
            app_screenshotSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 5,
                autoplay: false,
                smartSpeed: 2000,
                nav: false,
                dots: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    650: {
                        items: 2,
                    },
                    776: {
                        items: 4,
                    },
                    1199: {
                        items: 5,
                    },
                },
            })
        }
    }
    appScreenshot();
    /*===========End app_testimonial_slider js ===========*/

    /*===========Start app_testimonial_slider js ===========*/
    function prslider() {
        var p_Slider = $(".pr_slider");
        if (p_Slider.length) {
            p_Slider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                navContainer: '.pr_slider'
            })
        }
    }
    prslider();
    /*===========End app_testimonial_slider js ===========*/



    /*===========Start app_testimonial_slider js ===========*/
    function tslider() {
        var tSlider = $(".testimonial_slider_four");
        if (tSlider.length) {
            tSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                navContainer: '.testimonial_title'
            })
        }
    }
    tslider();

    /*===========Start app_testimonial_slider js ===========*/
    function videoslider() {
        var dSlider = $(".digital_video_slider");
        if (dSlider.length) {
            dSlider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                center: true,
                autoplay: true,
                smartSpeed: 1000,
                stagePadding: 200,
                responsiveClass: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    575: {
                        items: 1,
                        stagePadding: 100,
                    },
                    768: {
                        items: 1,
                        stagePadding: 40,
                    },
                    992: {
                        items: 1,
                        stagePadding: 100,
                    },
                    1250: {
                        items: 1,
                        stagePadding: 200,
                    }
                },
            })
        }
    }
    videoslider();



    function Saasslider() {
        var SSlider = $(".saas_banner_area_three");
        if (SSlider.length) {
            SSlider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                animateOut: 'fadeOut',
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: false,
                dots: true,
            })
        }
    }
    Saasslider();


    function tab_hover() {
        var tab = $(".price_tab");
        if ($(window).width() > 450) {
            if ($(tab).length > 0) {
                tab.append('<li class="hover_bg"></li>');
                if ($('.price_tab li a').hasClass('active_hover')) {
                    var pLeft = $('.price_tab li a.active_hover').position().left,
                        pWidth = $('.price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({
                        left: pLeft,
                        width: pWidth
                    })
                }
                $('.price_tab li a').on('click', function() {
                    $('.price_tab li a').removeClass('active_hover');
                    $(this).addClass('active_hover');
                    var pLeft = $('.price_tab li a.active_hover').position().left,
                        pWidth = $('.price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({
                        left: pLeft,
                        width: pWidth
                    })
                })
            }
        }

    }
    tab_hover();

    if ($('.selectpickers').length > 0) {
        $('.selectpickers').niceSelect();
    }


    function pr_slider() {
        var pr_image = $('.pr_image')
        if (pr_image.length) {
            pr_image.owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                dots: false,
                thumbs: true,
                thumbImage: true,
            });
        }
    }
    pr_slider()

    $('.ar_top').on('click', function() {
        var getID = $(this).next().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if (!isNaN(qty)) {
            result.value++;
        } else {
            return false;
        }
    });

    $('.ar_down').on('click', function() {
        var getID = $(this).prev().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if (!isNaN(qty) && qty > 0) {
            result.value--;
        } else {
            return false;
        }
    });


    /*===========Portfolio isotope js===========*/
    function portfolioMasonry() {
        var portfolio = $("#work-portfolio");
        if (portfolio.length) {
            portfolio.imagesLoaded(function() {
                portfolio.isotope({
                    itemSelector: ".portfolio_item",
                    layoutMode: 'masonry',
                    filter: "*",
                    animationOptions: {
                        duration: 1000
                    },
                    transitionDuration: '0.5s',
                    masonry: {

                    }
                });

                // Add isotope click function
                $("#portfolio_filter div").on('click', function() {
                    $("#portfolio_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    portfolioMasonry();

    function jobFilter() {
        var jobsfilter = $("#tab_filter");
        if (jobsfilter.length) {
            jobsfilter.imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                jobsfilter.isotope({
                    itemSelector: ".item",
                });

                // Add isotope click function
                $("#job_filter div").on('click', function() {
                    $("#job_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    jobsfilter.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    jobFilter();



    /*===========Portfolio isotope js===========*/
    function blogMasonry() {
        var blog = $("#blog_masonry")
        if (blog.length) {
            blog.imagesLoaded(function() {
                blog.isotope({
                    layoutMode: 'masonry',
                });
            })
        }
    }
    blogMasonry();


    /*--------------- End popup-js--------*/
    function popupGallery() {
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function() {
                $(".img_popup,.image-link").magnificPopup({
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image,
                    }
                });
            })
        }
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
            });
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
    popupGallery();

    if ($('#mapBox').length) {
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        });
    }


    // MAILCHIMP
    if ($(".mailchimp").length > 0) {
        $(".mailchimp").ajaxChimp({
            callback: mailchimpCallback,
            url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
        });
    }
    $(".memail").on("focus", function() {
        $(".mchimp-errmessage").fadeOut();
        $(".mchimp-sucmessage").fadeOut();
    });
    $(".memail").on("keydown", function() {
        $(".mchimp-errmessage").fadeOut();
        $(".mchimp-sucmessage").fadeOut();
    });
    $(".memail").on("click", function() {
        $(".memail").val("");
    });

    function mailchimpCallback(resp) {
        if (resp.result === "success") {
            $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
            $(".mchimp-sucmessage").fadeOut(500);
        } else if (resp.result === "error") {
            $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
        }
    }


    /* ===== Parallax Effect===== */
    function parallaxEffect() {
        if ($('.parallax-effect').length) {
            $('.parallax-effect').parallax();
        };
    }
    parallaxEffect();

    /* Counter Js */
    function counterUp() {
        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 1,
                time: 500
            });
        };
    };

    counterUp();

    /*===== progress-bar =====*/
    function circle_progress() {
        if ($('.circle').length) {
            $(".circle").each(function() {
                $(".circle").appear(function() {
                    $('.circle').circleProgress({
                        startAngle: -14.1,
                        size: 200,
                        duration: 9000,
                        easing: "circleProgressEase",
                        emptyFill: '#f1f1fa ',
                        lineCap: 'round',
                        thickness: 10,
                    })
                }, {
                    triggerOnce: true,
                    offset: 'bottom-in-view'
                })
            })
        }
    }
    circle_progress();

    /*------------- preloader js --------------*/

    $('#loading_spinner').show();
    $(window).on('load', function() {

        $('#ctn-preloader').fadeOut();

    });


    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // Pricing Filter
    if ($("#slider-range").length) {
        $("#slider-range").slider({
            range: true,
            min: 5,
            max: 150,
            values: [5, 100],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }

    $('.search-btn').on('click', function() {
        $('body').addClass('open');
        setTimeout(function() {
            $('.search-input').focus();
        }, 500);
        return false;
    });
    $('.close_icon').on('click', function() {
        $('body').removeClass('open');
        return false;
    });

    if ($('.develor_tab li a').length > 0) {
        $(".develor_tab li a").click(function() {
            var tab_id = $(this).attr("data-tab");
            $(".tab_img").removeClass("active");
            $("#" + tab_id).addClass("active");
        });
    }

    $('#intro-button').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#intro').offset().top - 20
        }, 500);
    });

    $('.app_service_item').click(function() {
        window.location = $(this).data("click-target");
    });

    $('.ss-demo-button').click(function() {
        $('#enterprise-demo-modal').modal('show');
    });

    $('#landing-form-submit').click(function() {
        $.when(validateDemoRequest()).then(function(isValid) {
            if (isValid) {
                checkCaptcha($("#recaptcha"), "6LcAAQ4UAAAAAO09jqmoNN94Rxo66nMiDbhS7j4x", "invisible", "completeDemoRequest", "inline");

            }
        })

    });

    function includes(container, value) {
        var returnValue = false;
        var pos = container.indexOf(value);
        if (pos >= 0) {
            returnValue = true;
        }
        return returnValue;
    }

    function setCookieConsent(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value + "; path=/";
        $('#cookie_consent_container').hide('slow');
        $('#landing-privacy-container').hide();
    }

    $("#cookie_accept").click(function() {

        //Consent cookie includes the timestamp (ms) of when consent was given
        setCookieConsent("SS_COOKIE_CONSENT", new Date().getTime(), 9999);
    });

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value + "; path=/";
    }

    if (!getCookie("SS_COOKIE_CONSENT")) {
        $('#cookie_consent_container').show();
        $('#landing-privacy-container').show();
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        url = url.toLowerCase(); // This is just to avoid case sensitiveness  
        name = name.replace(/[\[\]]/g, "\\$&").toLowerCase(); // This is just to avoid case sensitiveness for query parameter name
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    if (getParameterByName("gclid")) {
        setCookie("SS_GCLID", window.location.search + " " + new Date().toUTCString());
    }

})(jQuery)