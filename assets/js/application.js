(function ($) {
    "use strict";

    $(document).ready(function(){
    	$(".nav-main").hide();

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        $("#nav ul li a[href^='#']").on('click', function(e) {
   			e.preventDefault();
   			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

   			// edit: Opera and IE requires the "html" elm. animated
		});
		$("#topArrow").on('click', function(e) {
   			e.preventDefault();
   			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

   			// edit: Opera and IE requires the "html" elm. animated
		});
		$("#getApp").on('click', function(e) {
   			e.preventDefault();
   			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

   			// edit: Opera and IE requires the "html" elm. animated
		});
		var starting_position = $('.site-header').outerHeight( true ) + $('.navbar').outerHeight( true );
 
		$(window).scroll(function() {
			var yPos = ( $(window).scrollTop() );
			if( yPos > starting_position + $('#home').outerHeight( true )) { // show sticky menu after these many (starting_position) pixels have been scrolled down from the top and only when viewport width is greater than 500px.
				$(".nav-main").fadeIn();
			} else {
				$(".nav-main").fadeOut();
			}
		});

	});

}(jQuery));