/*-----------------------------------------------------------------------------------

Theme Name: Nithinbharathi Portfolio
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Nithinbharathi Portfolio

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Lenis Scroll Js
// Stacking Cards Js
// Sticky Header Js
// Hamburger Menu Js
// OnePage Active Js
// Testimonial Carousel Js
// Post Carousel Js
// Accordion Js
// Brand Slider Js
// Nice Select Js
// All Popup Js
// WoW Js
// Preloader Js
// Services Hover Js
// Portfolio Filter Js
// Portfolio Carousel Js
// Fun Fact Js
// Anim Js
// Contact Form Js

****************************************************/

(function ($) {
	"use strict";

	// Lenis Scroll Js
	const lenis = new Lenis();

	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	var windowSize = $(window).width();

	$(window).on("load resize", function () {
		if (windowSize > 991) {
			// Stacking Cards Js
			const cards = document.querySelectorAll(".stack-item");
			const stickySpace = document.querySelector(".stack-offset");
			const animation = gsap.timeline();
			let cardHeight;
			if (document.querySelector(".stack-item")) {
				function initCards() {
					animation.clear();
					cardHeight = cards[0].offsetHeight;
					//console.log("initCards()", cardHeight);
					cards.forEach((card, index) => {
						if (index > 0) {
							gsap.set(card, { y: index * cardHeight });
							animation.to(
								card,
								{ y: 0, duration: index * 0.5, ease: "none" },
								0
							);
						}
					});
				}
				initCards();
				ScrollTrigger.create({
					trigger: ".stack-wrapper",
					start: "top top",
					pin: true,
					end: () =>
						`+=${cards.length * cardHeight + stickySpace.offsetHeight}`,
					scrub: true,
					animation: animation,
					// markers: true,
					invalidateOnRefresh: true,
				});
				ScrollTrigger.addEventListener("refreshInit", initCards);
			}
		}
	});

	// Data Js
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$(document).ready(function ($) {
		// Sticky Header Js

		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".tj-header-area.header-sticky").addClass("sticky");
				$(".tj-header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".tj-header-area.header-sticky").addClass("sticky-out");
					$(".tj-header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

		// Meanmenu Js
		$("#headerMenu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "991",
			meanExpand: [
				"<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
			],
		});

		// Hamburger Menu Js
		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".mobile-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".mobile-menu ul li a")
			.not(".mean-expand")
			.on("click", function () {
				$(".menu-bar").removeClass("menu-bar-toggeled");
				$(".mobile-menu").removeClass("opened");
				$("body").removeClass("overflow-hidden");
			});



		// Portfolio Filter Js
		$(".portfolio-box").imagesLoaded(function () {
			var $grid = $(".portfolio-box").isotope({
				// options
				masonry: {
					columnWidth: ".portfolio-box .portfolio-sizer",
					gutter: ".portfolio-box .gutter-sizer",
				},
				itemSelector: ".portfolio-box .portfolio-item",
				percentPosition: true,
			});

			// filter items on button click
			$(".filter-button-group").on("click", "button", function () {
				$(".filter-button-group button").removeClass("active");
				$(this).addClass("active");

				var filterValue = $(this).attr("data-filter");
				$grid.isotope({ filter: filterValue });
			});
		});



	// Portfolio filter js
	$(".tj-project-4-wrappper").isotope({
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: ".tj-project-4-item",
			gutter: 125,
		},
	});
	$(".tj-project-4-wrappper").imagesLoaded(function () {
		var $grid = $(".tj-project-4-wrappper").isotope({
			itemSelector: ".tj-project-4-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".tj-project-4-item",
				gutter: 125,
			},
		});
	});


	// Portfolio Carousel Js
	$(".portfolio_gallery.owl-carousel").owlCarousel({
		items: 2,
		loop: true,
		lazyLoad: true,
		center: true,
		// autoWidth: true,
		autoplayHoverPause: true,
		autoplay: false,
		autoplayTimeout: 5000,
		smartSpeed: 800,
		margin: 30,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			768: {
				items: 2,
				margin: 20,
			},
			992: {
				items: 2,
				margin: 30,
			},
		},
	});

	// Testimonial Carousel Js
	$(".testimonial-carousel.owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: false,
		active: true,
		smartSpeed: 1000,
		autoplayTimeout: 7000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			},
		},
	});

	// Testimonial Carousel Js
	$(".testimonial-carousel-h5.owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: false,
		active: true,
		smartSpeed: 1000,
		autoplayTimeout: 7000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1000: {
				items: 2,
			},
		},
	});

	// testimonial Slider Js
	if ($(".testimonial-slider-6").length > 0) {
		var testimonial = new Swiper(".testimonial-slider-6", {
		    slidesPerView: 4,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				prevEl: ".testimonial-prev",
				nextEl: ".testimonial-next",
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.5,
				},
				992: {
					slidesPerView: 1.5,
				},
				1200: {
					slidesPerView: 2.5,
				},
				1400: {
					slidesPerView: 2.5,
				},
			},
		});
	}

	// Post Carousel Js
	$(".tj-post__gallery.owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		navText: [
			'<i class="fal fa-arrow-left"></i>',
			'<i class="fal fa-arrow-right"></i>',
		],
		autoplay: false,
		smartSpeed: 1000,
		autoplayTimeout: 3000,
	});

	// Rating Js
	if ($(".fill-ratings span").length > 0) {
		var star_rating_width = $(".fill-ratings span").width();
		$(".star-ratings").width(star_rating_width);
	}

	// Accordion Js
	if ($(".accordion-item").length > 0) {
		$(".accordion-item .faq-title").on("click", function () {
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			} else {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().addClass("active");
			}
		});
	}

	// Brand Slider Js
	if ($(".brand-slider").length > 0) {
		var brand = new Swiper(".brand-slider", {
			slidesPerView: 6,
			spaceBetween: 30,
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 6,
				},
			},
		});
	}

	// Portfolio Slider js
	var portfolio = new Swiper(".portfolio-slider-5", {
		spaceBetween: 30,
		// autoplay: {
		// delay: 8500,
		// },
		speed: 3000,
		pagination: {
			el: ".portfolio-pagination",
			clickable: true,
		},
		loop: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1.5,
			},
			992: {
				slidesPerView: 2.5,
			},
			1200: {
				slidesPerView: 2.5,
			},
			1400: {
				slidesPerView: 2.5,
			},
		},
	});

	// Testimonial Slider Js
	if ($(".tj-testimonial-slider").length > 0) {
		var brand = new Swiper(".tj-testimonial-slider", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 6000,
			},
			speed: 3000,
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	// Marquee slider Js
	if ($(".maquee-slider-one").length > 0) { 
		var swiper = new Swiper(".maquee-slider-one", {
		slidesPerView: 'auto',
		spaceBetween: 50,
		loop: true,
		speed: 5000,
		allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}
	
	if ($(".maquee-slider-two").length > 0) { 
		var swiper = new Swiper(".maquee-slider-two", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		loop: true,
		speed: 5000,
		allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	if ($(".maquee-slider-three").length > 0) { 
		var swiper = new Swiper(".maquee-slider-three", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		loop: true,
		speed: 5000,
		allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	if ($(".maquee-slider-four").length > 0) { 
		var swiper = new Swiper(".maquee-slider-four", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		freemode: true,
		centeredSlides: true,
		loop: true,
		speed: 5000,
		allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	// Nice Select Js
	$("select").niceSelect();

		// All Popup Js
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).lightcase({
				transition: "elastic",
				showSequenceInfo: false,
				slideshow: false,
				swipe: true,
				showTitle: false,
				showCaption: false,
				controls: true,
			});
		}

		$(".modal-popup").magnificPopup({
			type: "inline",
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: "auto",
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: "popup-mfp",
		});
	});

	$(window).on("load", function () {
		// WoW Js
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		// Preloader Js
		const svg = document.getElementById("preloaderSvg");
		const svgText = document.querySelector(
			".hero-section .intro_text svg text"
		);
		const tl = gsap.timeline({
			onComplete: startStrokeAnimation,
		});
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		tl.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
		tl.to(".preloader", {
			y: -1500,
		});
		tl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		function startStrokeAnimation() {
			if (svgText) {
				// Add a class or directly apply styles to trigger the stroke animation
				svgText.classList.add("animate-stroke");
			}
		}

		// Services Hover Js
		function service_animation() {
			var active_bg = $(".services-widget .active-bg");
			var element = $(".services-widget .current");
			$(".services-widget .service-item").on("mouseenter", function () {
				var e = $(this);
				activeService(active_bg, e);
			});
			$(".services-widget").on("mouseleave", function () {
				element = $(".services-widget .current");
				activeService(active_bg, element);
				element.closest(".service-item").siblings().removeClass("mleave");
			});
			activeService(active_bg, element);
		}
		service_animation();

		function activeService(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".services-widget").offset().top;
			e.closest(".service-item").removeClass("mleave");
			e.closest(".service-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		$(".services-widget .service-item").on("click", function () {
			$(".services-widget .service-item").removeClass("current");
			$(this).addClass("current");
		});

		// Portfolio Filter Js
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.siblings().removeClass("active");
			e.closest("button")
				.siblings()
				.addClass(".portfolio-filter .button-group");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}

		// Fun Fact Js
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}

		// Side Bar Sticky Js
		if ($(".side-sticky").length > 0) {
			var sticky = new Sticky('.side-sticky');
		}

		// Rating Js
		if ($(".fill-ratings span").length > 0) {
			var star_rating_width = $(".fill-ratings span").width();
			$(".star-ratings").width(star_rating_width);
		}


		// Skillbar Js
		if ($(".progress_bar").length > 0) {
			$(document).ready(function(){
			   progress_bar();
			});
			function progress_bar() {
			   var speed = 30;
			   var items = $('.progress_bar').find('.progress-item');
			   items.appear(function() {
				  var item = $(this).find('.progress');
				  var itemValue = item.data('progress');
				  var i = 0;
				  var value = $(this);
				  var count = setInterval(function(){
					 if(i <= itemValue) {
						var iStr = i.toString();
						item.css({
						   'width': iStr+'%'
						});
						   value.find('.item_value').html(iStr +'%');
						}
						else {
						clearInterval(count);
					 }
					 i++;
				  },speed);
			   });
			}
		}

		// Home 7 testimonial Slider Js
		var testimonialSwiper = new Swiper(".tj-testimonial-7-active", {
			slidesPerView: 1,
			loop: true,
			speed: 1500,
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});


		// Text Invert With Scroll 
		const split = new SplitText(".tj-text-invert", { type: "lines" });
		split.lines.forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top 80%',
					end: "bottom center"
				}
			});
		});

		if ($('.tj-char-animation').length > 0) {
			// 25. Title Animation
			let char_come = gsap.utils.toArray(".tj-char-animation");
			char_come.forEach(splitTextLine => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitTextLine,
						start: 'top 90%',
						end: 'bottom 60%',
						scrub: false,
						markers: false,
						toggleActions: 'play none none none'
					}
				});
				const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
				gsap.set(splitTextLine, { perspective: 300 });
				itemSplitted.split({ type: "chars, words" })
				tl.from(itemSplitted.chars,
					{
						duration: 1,
						delay: 0.5,
						x: 100,
						autoAlpha: 0,
						stagger: 0.05
					});
			});
		}

		// Anim Js
		const target = document.getElementById("anim");
		function splitTextToSpans(targetElement) {
			if (targetElement) {
				const text = targetElement.textContent;
				targetElement.innerHTML = "";
				for (let character of text) {
					const span = document.createElement("span");
					if (character === " ") {
						span.innerHTML = "&nbsp;";
					} else {
						span.textContent = character;
					}
					targetElement.appendChild(span);
				}
			}
		}
		splitTextToSpans(target);

        // accordion Js
        $(".accordion-list > li:nth-child(1)").addClass("active").find(".tj-service-5-accordion-wrap").show();
        $('.accordion-list > li:not(:nth-child(1)) .tj-service-5-accordion-wrap').hide();
        $('.accordion-list > li').click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".tj-service-5-accordion-wrap").slideUp();
            } else {
                $(".accordion-list > li.active .tj-service-5-accordion-wrap").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".tj-service-5-accordion-wrap").slideDown();
            }
        });

		// Contact Form Js
		if ($("#contact-form").length > 0) {
			$("#contact-form").validate({
				rules: {
					conName: "required",
					conEmail: {
						required: true,
						email: true,
					},
				},
				messages: {
					conName: "Enter your name.",
					conEmail: "Enter a valid email.",
				},
				submitHandler: function (form) {
					// start ajax request
					$.ajax({
						type: "POST",
						url: "assets/mail/contact-form.php",
						data: $("#contact-form").serialize(),
						cache: false,
						success: function (data) {
							if (data == "Y") {
								$("#message_sent").modal("show");
								$("#contact-form").trigger("reset");
							} else {
								$("#message_fail").modal("show");
							}
						},
					});
				},
			});
		}

		// Home 4 Hero Animation
		if($(".tj-header-area.header-4.header-absolute").length > 0) {
			tl.from(".tj-header-area.header-4:not(.header-sticky)", {opacity: 0, duration: .5}, 3.5, {autoAlpha: 1});
		}
		if($(".tj-hero-4-area").length > 0) {
			tl.from(".tj-hero-4-subtitle", {y: 50, opacity: 0, duration: .5});
			tl.from(".tj-hero-4-title", {y: 50, opacity: 0, duration: .5});
			tl.from(".tj-hero-4-bottom-thumb img", {y: 50, opacity: 0, duration: .5});
			tl.from(".tj-hero-4-bottom-thumb-shape-1", {x: 50, opacity: 0, duration: .5});
			tl.from(".tj-hero-4-bottom-thumb-shape-2", {x: -50, opacity: 0, duration: .5});
			tl.from(".tj-hero-4-bottom-reviews", {x: -50, opacity: 0, duration: .5});
			tl.from(".tj-hero-4-bottom-counter", {x: 50, opacity: 0, duration: .5});
		}
	});
})(jQuery);
