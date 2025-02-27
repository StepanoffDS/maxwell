// MENU-BURGER
$(".header__burger").click(function (event) {
  $(".header__burger, .header__menu").toggleClass("active");
  $("body").toggleClass("lock");
});
// MENU-BURGER

// slider
$(".slick-home__slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
});
// slider

// slider
$(".home__slick-2").slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 10000,
});
// slider

$(document).ready(() => {
  let width = $(window).width();
  let height = $(window).height();
  $("#videoCover").width(width).height(height);
});

$(window).resize(() => {
  let width = $(window).width();
  let height = $(window).height();
  $("#videoCover").width(width).height(height);
});

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

// LightGallery Start

function Gallery() {
	const galleries = document.querySelectorAll(".lg-gallery");

	galleries.forEach((gallery) => {
		lightGallery(gallery, {
			plugins: [lgZoom, lgThumbnail],
			selector: ".item",
		});
	});
}

try {
	Gallery();
} catch (error) {
	console.log('На этой странице нет галереи. Подробнее: ', error);
}

// LightGallery End

function initializeSliderInPayment() {
	if (window.innerWidth < 767) {
			if (!$('.contact__deal-right').hasClass('slick-initialized')) {
					$('.contact__deal-right').slick({
						dots: true,
						arrows: false,
						infinite: false,
						speed: 300,
						slidesToShow: 1,
						adaptiveHeight: true,
						// autoplay: true,
						autoplaySpeed: 2000,
					});
			}
	} else {
			if ($('.contact__deal-right').hasClass('slick-initialized')) {
					$('.contact__deal-right').slick('unslick'); // Уничтожаем слайдер на больших экранах
			}
	}
}
try {
	// Инициализация слайдера при загрузке страницы
	initializeSliderInPayment();
} catch (error) {

}

// Обновление слайдера при изменении размера окна
$(window).resize(function() {
	try {
		initializeSliderInPayment();
	} catch (error) {

	}
});
