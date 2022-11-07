new WOW().init();




$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },1000)

})

$(window).scroll(function(){
  console.log($(window).scrollTop())
    if($(window).scrollTop() > 200){
      $(".menu").addClass("smmm")
    }else{
      $(".menu").removeClass("smmm")

    }

    if($(window).scrollTop() > 1000){
      $(".backtotop").fadeIn()
      
    }else{
      $(".backtotop").fadeOut()
    }
  
})


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top 
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



// banner slider start


$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:true,
    fade: true,
    prevArrow:'<i class="fas fa-arrow-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-right next"></i>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
          arrows:false,
          dots:true,
          fade:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
  });

  // banner slider end



  // service slider start

  $('.service-slider').slick({
    dots: false,
    arrows: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:true,
    vertical:true,
    centerMode:true,
    centerPadding:'0',
    prevArrow:'<i class="fas fa-chevron-up prev"></i>',
    nextArrow:'<i class="fas fa-chevron-down next"></i>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
  });

    // service slider end


      // testimonial slider start

      $('.testi-slider').slick({
        dots: false,
        arrows: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:true,
        vertical:true,
        centerMode:true,
        centerPadding:'0',
        asNavFor:('.testi-right-slider'),
        prevArrow:'<i class="fas fa-chevron-up prev"></i>',
        nextArrow:'<i class="fas fa-chevron-down next"></i>',

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical:true,
              arrows:false,
              dots:true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots:true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
       
      });


      // testimonial slider end


      // testimonial-right slider start

      $('.testi-right-slider').slick({
        dots: false,
        arrows: false,
        autoplay:false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        vertical:true,
        asNavFor:('.testi-slider'),

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              arrows:false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
       
      });

        // testimonial-right slider end


      // counter part strat


      $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// logo slider start


$('.logo-slider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  infinite:true,
  centerMode:true,
  centerPadding:'0',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
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
        slidesToScroll: 1,
        autoplay:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});

// logo slider end




