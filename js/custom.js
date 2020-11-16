$(function () {

  // PRELOADER FILE HERE



// TYPE FILE HERE
  var typed = new Typed('.type', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      'Adhar Sumon',
      'a frontend developer',
      'a UI/UX Designer',
      'a web designer',
      'a freelancer'
    ],
    stringsElement: null,
  
    typeSpeed: 50,
    startDelay: 100,
    backSpeed: 50,
    smartBackspace: true,
    shuffle: false,
    backDelay: 3000,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '...',
    autoInsertCss: true
  });


// PORTFOLIO MIXITUP JS HERE
var mixer = mixitup('.mix');

// TESTIMONIAL SLIDER HERE
$('.slick-active').slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: ".previous-btn",
  prevArrow: ".next-btn",
  autoplay: true,
  autoplaySpeed: 3000
});
	

  //WOW ANIMATION
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



});