$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);


	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper2', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bthree', 2, {y: '-50%', ease:Power0.easeNone}, 0)
	;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.banner3',
		triggerHook: 1,
		duration: '100%'
	})
		.setTween(parallaxTl)
		.addTo(controller);


	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".bcg-parallax"})

	// trigger animation by adding a css class
		.setClassToggle("#animate1", "zap")
		// .addIndicators({name: "#"})
		.addTo(controller);

});


// var a = document.querySelector("a");
// var menuText = document.querySelector(".menu-text");
var dropdownMenu = document.querySelector("ul.dropdown");
var dropdownSearch = document.querySelector(".top-bar-right");

// TweenMax.from(a, 1.5, {x: 1400, ease: Bounce.easeOut});
// TweenMax.to(first, 2, {x: 400, ease: RoughEase.ease.config({template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})});
// TweenMax.from(menuText, 2, {x: 400, autoAlpha:1, ease: Elastic.easeOut.config(1, 0.3)});
// TweenMax.to(second, 2, {x: 400, autoAlpha:1, ease: SlowMo.ease.config(0.7, 0.7, false)});
// TweenMax.from(dropdownMenu, 2, {x: 400, ease: Back.easeOut.config(4)});
TweenMax.from(dropdownMenu, 2, {x: 400, ease: Elastic.easeOut.config(1, 0.3)});
TweenMax.from(dropdownSearch, 2, {x: -400, ease: Elastic.easeOut.config(1, 0.3)});
// TweenMax.from(first, 2, {backgroundColor: "white", delay: 4});
// TweenMax.from(second, 2, {paddingLeft: 400, delay: 4});
// TweenMax.from(third, 2, {marginLeft: 400, delay: 6});


// init controller
var controller = new ScrollMagic.Controller();

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
	var id = $(this).attr("href");
	if ($(id).length > 0) {
		e.preventDefault();

		// trigger scroll
		controller.scrollTo(id);

		// if supported by the browser we can even update the URL.
		if (window.history && window.history.pushState) {
			history.pushState("", document.title, id);
		}
	}
});
















