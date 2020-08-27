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
	});

	// close button function for wholesale videoContainer
	$('.videoContainer .cross').on('click', function(){
		$('.videoContainer').css('z-index', '-100');

		// saves the original iframe src in a variable
		let url = $(this).next().attr('src');
		
		// empties the iframe src to stop the video from playing
		$(this).next().attr('src', '');

		// reassigns the copied iframe src back
		$(this).next().attr('src', url);
	});

	// display product video for wholesale page
	$('.wholesaleProducts p').on('click', function(){
		// console.log(this + '.videoContainer')
		// $(this + '.videoContainer').css('z-index', '100');
		$(this).next().css('z-index', '100');
	})


	// side nav function
	$('.bar').on('click', function(){
		$('nav ul li').toggleClass('showMenu')
	});

	// contact us function
	$('.closeBox, .contactUsLink').on('click', function(){
		$('.contactUs').toggleClass('showContactUs')
	});

	// scroll top function
	$('.upArrowBox').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 'slow')
	})
});