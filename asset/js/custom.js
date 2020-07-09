$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    
    
    $('#download_resource,#download_resource2').on('click',function(){
         $('#download_resource_popup').addClass('show');
          return false;
      })
      $('#popup_close').on('click',function(){
         $('#download_resource_popup').removeClass('show');
      })


    
    $('.blog_main_slider').owlCarousel({
        // stagePadding: 15,
        loop:true,
        margin:12,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1400:{
                margin:20,
                items:4,
            }
        }
    })



    


    $('.testmonial_slider_active').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal active fa-long-arrow-right'></i>"],
        smartSpeed: 900,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    $('.solution_impect_right').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        smartSpeed: 900,
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.information_trusted_slider').owlCarousel({
        // stagePadding: 15,
        loop:true,
        margin:0,
        nav:false,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
        }
    })










    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){  
            $('#header_top').addClass("animated slideInDown fix");
        }
        else{
            $('#header_top').removeClass("animated slideInDown fix");
          }
        });




    $('.testmonial_slider_active .owl-next').on('click',function(){
        $('.testmonial_slider_active .owl-next i').addClass('active');
        $('.testmonial_slider_active .owl-prev i').removeClass('active');
    })

    $('.testmonial_slider_active .owl-prev').on('click',function(){
        $('.testmonial_slider_active .owl-prev i').addClass('active');
        $('.testmonial_slider_active .owl-next i').removeClass('active');
    })



    // this is for page smoth scroll
    $("html").easeScroll({
        frameRate: 70,
        animationTime: 2000,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: false,
      });






});