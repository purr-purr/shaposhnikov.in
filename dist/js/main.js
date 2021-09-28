// Preloader
window.onload = function () {
	document.body.classList.add('loaded-active');
	window.setTimeout(() => {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded-active');
	}, 500);
};

// =====================================================

// <1024px - начало адаптивной версии
const adaptiveBreakpoint = $(window).width() > 1024;

// Scroll Action
$(window).scroll(function() {
	const height = $(window).scrollTop();
	const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

	// from top
	if(height > 500 && adaptiveBreakpoint){
		$('.main-heading__inner').addClass('hide-text');
		$('.intro-bg__item').addClass('intro-bg__hide');
		$('.menu__open-btn').addClass('menu__hide-half-border');
	} else {
		$('.main-heading__inner').removeClass('hide-text');
		$('.intro-bg__item').removeClass('intro-bg__hide');
		$('.menu__open-btn').removeClass('menu__hide-half-border');
	}
	if(height > 500 && adaptiveBreakpoint){
		$('.about-me__inner').addClass('active');
	} else {
		$('.about-me__inner').removeClass('active');
	}
	if(height > 800 && adaptiveBreakpoint) {
		$('.main-heading__inner').hide();
		$('.intro-bg__item').hide();
	} else {
		$('.main-heading__inner').show();
		$('.intro-bg__item').show();
	}
	if(height > 1100 && adaptiveBreakpoint){
		$('.user-name').addClass('active');
	} else{
		$('.user-name').removeClass('active');
	}
	if(height > 1450 && adaptiveBreakpoint){
		$('.line--first').addClass('active');
	} else{
		$('.line--first').removeClass('active');
	}
	if(height > 1750 && adaptiveBreakpoint){
		$('.line--second').addClass('active');
	} else{
		$('.line--second').removeClass('active');
	}
	if(height > 2050 && adaptiveBreakpoint){
		$('.line--third').addClass('active');
	} else{
		$('.line--third').removeClass('active');
	}
	if(height > 2350 && adaptiveBreakpoint){
		$('.line--four').addClass('active');
	} else{
		$('.line--four').removeClass('active');
	}

	// from bottom
	if (scrollBottom < 500) {
		$('.scroll-down__svg').css({
			'transform': 'rotate(180deg)',
		})
	} else {
		$('.scroll-down__svg').css({
			'transform': 'rotate(0deg)',
		})
	}
});

// =====================================================

// Custom cursor
$(document).ready(function() {
  const cursor = $(".cursor");
  const cursorAura = $(".aura");
  const redDot = $(".red-dot");
  const mainHeading = $(".main-heading__inner");

	// Custom cursor movement
	if (adaptiveBreakpoint) {
		onmousemove = function (e){
			cursor.css({
				'left': e.clientX,
				'top': e.clientY,
			}),
			cursorAura.css({
				'left': e.clientX,
				'top': e.clientY,
			})
		};

		// Hover effect for any elements
		$(".on-hover").mouseenter(function(e) {
			cursorAura.addClass('active');
		});
		$(".on-hover").mouseleave(function() {
			cursorAura.removeClass('active');
		});

		// Hover effects on name in main heading
		mainHeading.mouseenter(function(e) { 
			mainHeading.css({"z-index": "100"});
			cursorAura.hide();
			cursor.css({
				"transform": "scale(40)",
				"background-color": "#FF0F00",
				"opacity": "1",
				"transition": "transform .5s ease-out",
			});
			redDot.css({
				"transition": "all .5s ease-out",
				"opacity": "0",
			});
		});
		mainHeading.mouseleave(function() { 
			mainHeading.css({"z-index": "5"});
			cursorAura.show();
			cursor.css({
				"transform": "scale(1)",
				"background-color": "#333",
				"opacity": "0.5",
				"transition": "transform .5s ease-out",
			});
			redDot.css({
				"opacity": "1",
				"transition": "all .5s ease-out",
			});
		});
	}
});


// =====================================================

// Opening and Closing a Menu
$('.menu__open-btn, .nav').on('click', function(event){
  $('.nav').toggleClass('open');
	if ($('.nav').hasClass('open')) {
		$('html').css({'overflow-y': 'hidden'});
		// $('.header').css({'mix-blend-mode': 'normal'});
		$('.header').addClass('off-mix-blend-mode');
		$('.menu__opened').hide();
		$('.menu__open-btn').addClass('menu__hide-border cursor-close');
	} else {
		$('html').css({'overflow-y': 'auto'});
		// $('.header').css({'mix-blend-mode': 'difference'});
		$('.header').removeClass('off-mix-blend-mode');
		$('.menu__opened').show();
		$('.menu__open-btn').removeClass('menu__hide-border cursor-close');
		}
});

// =====================================================
// Dark Mode
const darkModeBtn = $(".dark-theme-btn");
const bodyElem = $('body');
const activeDarkMode = function () {
	bodyElem.toggleClass('dark-mode');

	if (bodyElem.hasClass('dark-mode')) {
		bodyElem.addClass('dark-mode');
	} else {
		bodyElem.removeClass('dark-mode');
	}
}

darkModeBtn.click(activeDarkMode);

// Animation Rotation Dark Mode Icon
$(window).bind('mousewheel', function(event) {
	if (event.originalEvent.wheelDelta >= 0) {
		darkModeBtn.css({
			"animation": "spin-top 4s infinite linear",
		});
	}
	else {
		darkModeBtn.css({
			"animation": "spin-down 4s infinite linear",
		});
	}
});

// =====================================================