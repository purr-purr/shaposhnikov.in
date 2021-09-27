// Preloader
window.onload = function () {
	document.body.classList.add('loaded-active');
	window.setTimeout(() => {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded-active');
	}, 500);
};


// Действие при скролле
$(window).scroll(function() {
	var height = $(window).scrollTop();
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	
	// from top
	if(height > 500){
		$('.main-heading__inner').addClass('hide-text');
		$('.intro-bg__item').addClass('intro-bg__hide');
		$('.menu__open-btn').addClass('menu__hide-half-border');
	} else{
		$('.main-heading__inner').removeClass('hide-text');
		$('.intro-bg__item').removeClass('intro-bg__hide');
		$('.menu__open-btn').removeClass('menu__hide-half-border');
	}
	if(height > 500){
		$('.about-me__inner').addClass('active');
	} else{
		$('.about-me__inner').removeClass('active');
	}
	if(height > 800) {
		$('.main-heading__inner').hide();
		$('.intro-bg__item').hide();
	} else {
		$('.main-heading__inner').show();
		$('.intro-bg__item').show();
	}
	if(height > 1100){
		$('.user-name').addClass('active');
	} else{
		$('.user-name').removeClass('active');
	}
	if(height > 1450){
		$('.line--first').addClass('active');
	} else{
		$('.line--first').removeClass('active');
	}
	if(height > 1750){
		$('.line--second').addClass('active');
	} else{
		$('.line--second').removeClass('active');
	}
	if(height > 2050){
		$('.line--third').addClass('active');
	} else{
		$('.line--third').removeClass('active');
	}
	if(height > 2350){
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


// Движение кастомного курсора 
var moveCursor = document.querySelector(".cursor");
var moveAura = document.querySelector(".aura");

onmousemove = function (e){
  moveCursor.style.left = e.clientX + 'px';
  moveCursor.style.top = e.clientY + 'px';

  moveAura.style.left = e.clientX + 'px';
  moveAura.style.top = e.clientY + 'px';
}


// Эффекты при наведении на Имя в заголовке
$(document).ready(function() {
  var cursor = $(".cursor");
  var cursorAura = $(".aura");
  var redDot = $(".red-dot");
  var mainHeading = $(".main-heading__inner");

  mainHeading.mouseenter(function(e) {
		mainHeading.css({
			"z-index": "100",
		});
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
	})

  mainHeading.mouseleave(function() {
		mainHeading.css({
			"z-index": "5",
		});
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
	
	$(".on-hover")
		.mouseenter(function(e) {
			cursorAura.addClass('active');
		})
		.mouseleave(function() {
			cursorAura.removeClass('active');
		})
});


// Открытие и закрытие меню
$('.menu__open-btn, .nav').on('click', function(event){
  $('.nav').toggleClass('open');
	if ($('.nav').hasClass('open')) {
		$('html').css({'overflow-y': 'hidden'});
		$('.header').css({'mix-blend-mode': 'normal'});
		$('.menu__opened').hide();
		$('.menu__open-btn').addClass('menu__hide-border cursor-close');
	} else {
		$('html').css({'overflow-y': 'auto'});
		$('.header').css({'mix-blend-mode': 'difference'});
		$('.menu__opened').show();
		$('.menu__open-btn').removeClass('menu__hide-border cursor-close');
		}
});


// Анимация вращение Иконки Dark Mode
$(window).bind('mousewheel', function(event) {
	const rotateItem = $(".dark-theme-btn");

	if (event.originalEvent.wheelDelta >= 0) {
		rotateItem.css({
			"animation": "spin-top 4s infinite linear",
		});
	}
	else {
		rotateItem.css({
			"animation": "spin-down 4s infinite linear",
		});
	}
});


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

