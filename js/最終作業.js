$(document).ready(function() {

  $('.menu>li>a').click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
	});
  $('.btn').click(function(event) {
  	$('html,body').animate({scrollTop:0}, 3000);
  });
    lightbox.option({
      'resizeDuration': 2000,
      'wrapAround': true
    })

});