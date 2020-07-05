$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    
    
    


    
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
        navText: ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
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

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){  
            $('#header_top').addClass("animated slideInDown fix");
        }
        else{
            $('#header_top').removeClass("animated slideInDown fix");
          }
        });















});