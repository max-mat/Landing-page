$('document').ready(function() {

	$(function() {
		$('.main-presentation').append(`<img class="img_animated_1" src="img/bg_info/{ }.png" alt="img_animated_1">`);
		$('.img_animated_1').fadeOut(5000);
		$('.main-presentation').append(`<img class="img_animated_2" src="img/bg_info/div.png" alt="img_animated_2">`);
		$('.img_animated_2').fadeOut(3000);
		$('.main-presentation').append(`<img class="img_animated_3" src="img/bg_info/grill.png" alt="img_animated_3">`);
		$('.img_animated_3').fadeOut(3000);
		$('.main-presentation').append(`<img class="img_animated_4" src="img/bg_info/slash.png" alt="img_animated_4">`);
		$('.img_animated_4').fadeOut(4000);
		$('.main-presentation').append(`<img class="img_animated_5" src="img/bg_info/div1.png" alt="img_animated_5">`);
		$('.img_animated_5').fadeOut(5000);
	});

	$(function() {
		$('.header-container').prepend(`<button class="menu-button"></button>`);
	});

	$(function() {
		$('.header-container').on('click', '.menu-button', function() {
			$('.menu-open').slideToggle(400);
		});
		$('.header-container').on('click', '.menu-button', function() {
			$(this).toggleClass('menu-button__close');
		});
	});


	$(function() {
		
		$('.order-call').click(function() {
			event. preventDefault();
			$('.popup-container__order-call').show();
			$("body").css("overflow", "hidden");
		})
		$('.popup__order-call__button').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
		$('.popup__order-call__close').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
	})

	$(function() {
		$('.phone-call').click(function() {
			event. preventDefault();
			$('.popup-container__order-call').show();
			$("body").css("overflow", "hidden");
		})
		$('.popup__order-call__button').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
		$('.popup__order-call__close').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
	})

	$(function() {
		$('.main-presentation-info__button').click(function() {
			event. preventDefault();
			$('.popup-container__order-call').show();
			$("body").css("overflow", "hidden");
		})
		$('.popup__order-call__button').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
		$('.popup__order-call__close').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
	})

	$(function() {
		$('.main-works__button').click(function() {
			event. preventDefault();
			$('.popup-container__order-call').show();
			$("body").css("overflow", "hidden");
		})
		$('.popup__order-call__button').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
		$('.popup__order-call__close').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
	})

	$(function() {
		$('#order-project').click(function() {
			 event. preventDefault(); 
			$('.popup-container__order-project').show();
			$("body").css("overflow", "hidden");
		})
		$('.popup__order-project__button').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
		$('.popup__order-project__close').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		})
	})

	$(function() {
		$('.footer-container__call').click(function() {
			event. preventDefault();
			$('.popup-container__order-call').show();
			$("body").css("overflow", "hidden");
		})
		$('.popup__order-call__button').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		});
		$('.popup__order-call__close').click(function() {
			$(this).parent().parent().hide();
			$("body").css("overflow", "auto");
		});
	});

		$('.slider').slick({
    		arrows: true,
    		infinite: true,
    		slidesToShow: 3,
    		slidesToScroll: 1,
    		infinite: true,

    		responsive: [
    			{
    				breakpoint: 1400,
    				settings: {
    					dots: true,
    					arrows: false,
    					slidesToShow: 2
    				}

    			},
    			{
    				breakpoint: 1200,
    				settings: {
    					dots: true,
    					arrows: false,
    					variableWidth: true
    				}
    			},
    			{
    				breakpoint: 850,
    				settings: {
    					dots: true,
    					arrows: false,
    					variableWidth: true,
    					slidesToShow: 1
    				}
    			}

    		]
  		});

	$(function() {
		$('.popup__order-call__tel').mask('+7 (999) 999-99-99', {placeholder:" "});
	});

	$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
	});

});