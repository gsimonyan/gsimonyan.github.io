jQuery(document).ready(function($) {
	$('.btn1').slideUp();

	$('.btn').click(function(event) {
        
		$(this).next().slideToggle(500);
		$('.btn').not(this).next().slideUp(500);
	});


});