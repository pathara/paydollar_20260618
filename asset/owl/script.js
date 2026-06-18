
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 5,
    loop: true,
    margin: 0, // Remove margin between items
    nav: true,
	dot:false,
    autoplay: true,
    autoplayTimeout: 5000, // Rotate automatically every 3 seconds
    responsive: {
      0: {
        items: 1 // Mobile devices
      },
      600: {
        items: 3 // Small tablets
      },
      1000: {
        items: 5 // Tablets and small desktops
      },
      1200: {
        items: 7 // Large desktops
      }
    }
  });
});
