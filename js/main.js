$(function () {
    
  'use strict';
    
    
  //===========PRE-LOADER JS===========
    $(window).on("load", function(){
        $('.pre_loader').delay(500).fadeOut(500);
    });

    
    
    //===========MENU FIX===========
    var navoff = $('.menu').offset().top;

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.menu').addClass('menu_fix');
        } else {
            $('.menu').removeClass('menu_fix');
        }
    });


    
    //===========MOBILE MENU===========
    $(document).ready(function() {

         $(".hs-menubar").hsMenu();
    });
    
    
    
    //===========POP_UP===========    
    $("#cross").on("click", function(){
        $("#pop_up").fadeOut();
    });
    
    
    
    //===========BANNER SLIDER===========  
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        
       responsive: [
                 {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },   
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
           
        ]
    });


    
    //=========EXCLUSIVE SLIDER=========   
    $('.exclusive_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
      prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        
        
     responsive: [
         {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
          }
        },
         
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
          }
        },
         
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          }
        },
         
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
         
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ] 
    });


    //===========COUNTER===========
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 1,
            time: 1000
        });
    });


    //===========WOW===========
    new WOW().init();


    //==========NICE SELECT============
    $('#select_js').niceSelect();
    
    
    
    //==========NICE SELECT============
    $('#select_js_2').niceSelect();



    //==========ELEVATI ZOOM==========
    $(".zoom").elevateZoom({
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        lensFadeIn: 1000,
        lensFadeOut: 1000
    });
    
    
    
    //==========NICE NUMBER==========
    $('input[type="number"]').niceNumber();


    
    //==========DOB PLUGIN==========
    $.dobPicker({
        daySelector: '#dobday',
        /* Required */
        monthSelector: '#dobmonth',
        /* Required */
        yearSelector: '#dobyear',
        /* Required */
    });


    
    //==========SCROLL BUTTON==========*   
    $('.scroll_btn').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 3000);
    });
    
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 300){
            $('.scroll_btn').fadeIn();
           }
        
        else{
            $('.scroll_btn').fadeOut();
        }
    });
    
    
    
    //===========BRAND SLIDER===========
    $('.brand_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        
       responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            }
        }, 
           
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            }
        },   
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        }
           
        ]
    });
    
    
     //===========TEAM SLIDER===========
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        
       responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            }
        }, 
           
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },   
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
           
        ]
    });    
    

    

});
