
$(document).ready(function(){ 
	 $('#header2').hide();
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('#header_wrap').addClass('header-scrolled');
	  $('#header1').fadeOut(0);
	  $('#header2').fadeIn(0);
    } else {
      $('#header_wrap').removeClass('header-scrolled');
	   $('#header2').fadeOut(0);
	  $('#header1').fadeIn(0);
    }
  })

 });
