$(document).ready(function(){
	// $('.chinese').hide();
	
	// translation button
	$('.translation .chinese').on('click', function(){
		$('.chinese').show();
		$('.english').hide();
		$('.translation .english').show();
		$('.translation .chinese').hide();
	});

	$('.translation .english').on('click', function(){
		$('.english').show();
		$('.chinese').hide();
		$('.translation .chinese').show();
		$('.translation .english').hide();
	})


	// side nav function
	$('.bar').on('click', function(){
		$('nav ul li').toggleClass('showMenu')
	});

	// contact us function
	$('.closeBox, .contactUsLink').on('click', function(){
		console.log('l')
		$('.contactUs').toggleClass('showContactUs')
	});
});