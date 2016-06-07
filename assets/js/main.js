// 01:Slide Mobile
var currentIndex = 0,
  items = $('.most-view .slide-mobile div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.most-view .slide-mobile div').eq(currentIndex);
  items.hide();
  item.fadeIn();
  item.css('display','inline-block');
}

// var autoSlide = setInterval(function() {
//   currentIndex += 1;
//   if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
//   }
//   cycleItems();
// }, 3000);

$('.most-view .next').click(function() {
//   clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
	currentIndex = 0;
  }
  cycleItems();
});

$('.most-view .prev').click(function() {
//   clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
	currentIndex = itemAmt - 1;
  }
  cycleItems();
});
function startCarousel(){
	var viewportWidth = $("body").innerWidth();
	var viewportHeight = $("body").innerHeight();
	if (viewportWidth <= 480) {
		cycleItems();
	} else {
		items.show();
	}
}

// START SCRIPT RESIZE
var wW, wH;
startCarousel();
resizeFeacturedHome();
$(window).resize(function(){
	startCarousel();
	resizeFeacturedHome();

});

function resizeFeacturedHome(){
	// set home 100%
	wW = $(window).width();
	wH = $(window).height();
	var headerSize = $('body header').height();
	var newSize = wH-headerSize;
	$('.parallax-1').height(newSize);
	// $('.featured-image').height(newSize);
}




// start jquery
$(document).ready(function(){
	// 02:Menu Mobile
	// open menu RESPONSIVE
	$('#button-menu').click(function(e){
		e.preventDefault();
		$('#menu-mobile').toggle();
	});

	$('#menu-mobile-close').click(function(e){
		e.preventDefault();
		$('#menu-mobile').hide();
	});

	// 03:BACK TOP
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}


});
