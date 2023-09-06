

$(function(){
    $('.work_btn-second').click(function(){
    $('.products-hide').fadeToggle(100)
    $(this).toggleClass('down')
    $('.work_btn-second').css('transition',"0.5s")
    });
})






$(function(){
    var btnlink5 = $('.work_button')
$(btnlink5).click(function(){
    if ($(this).hasClass('active2')){
        $(this).removeClass('active2')
        $(this).text('Look More')
    }
    else if(!$(this).hasClass('active2')){
        $(this).addClass('active2')
        $(this).text('Close')
    }
})
});


$(function(){
    var btnlink5 = $('.news_button')
$(btnlink5).click(function(){
    if ($(this).hasClass('new-active23')){
        $(this).removeClass('new-active23')
        $(this).text('More News').css({
            'color':'#274C5B',
            'font-size':'20px',
            'font-weight':'700',
            'font-family':'Roboto',

        })
    }
    else if(!$(this).hasClass('new-active23')){
        $(this).addClass('new-active23')
        $(this).text('Close')
    }
})
});



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(function(){
   $('.organic_items-info-button').click(function(){
   $('.open-blue').fadeToggle(500)
   });
  });

  $(function(){
  $('.news_button').click(function(){
  $('.news_block-inner-open').fadeToggle(200)
  });
  });

  $(function(){
  $('.traders_item-info-accord1').click(function(){
   $('.traders_item-info-accord-open1').fadeToggle()
  });
  });

  $(function(){
    $('.traders_item-info-accord2').click(function(){
     $('.traders_item-info-accord-open2').fadeToggle()
    });
    });

    $(function(){
    $('.burger_menu').click(function(){
     $('.header-menu').fadeToggle(500)
    });
    });

  
        $(function(){
            $('.burger_menu').click(function(){
            $('.burger_menu').toggleClass('active')
            });
            });
        

 
AOS.init();
