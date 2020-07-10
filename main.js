$(document).ready(function(){
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