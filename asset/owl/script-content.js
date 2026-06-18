
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop: true,
    margin: 0, // Remove margin between items
    nav: true,
	dot:false,
    autoplay: true,
	animateOut: 'fadeOut',
	loop: true,
	margin: 10,
    autoplayTimeout: 5000, // Rotate automatically every 3 seconds
    responsive: {
      0: {
        items: 1 // Mobile devices
      },
      600: {
        items: 1 // Small tablets
      },
      1000: {
        items: 1 // Tablets and small desktops
      },
      1200: {
        items: 1 // Large desktops
      }
    }
  });
  
});


