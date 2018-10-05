
function initializeElmMasonry() {

	/*Initializes the Masonry grid for full Elm topic feeds*/
	var $grid = $('.elm-feed-main').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    itemSelector: '.elm-feed-listing',
	    percentPosition: true,
	    gutter: '#elm-feed-gutter-sizer',
	    transitionDuration: '0s'
	  });
	});


	/*Initializes the Masonry grid for Find it Fast modules on landing pages*/
	var $grid2 = $('.findit-landing-grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid2.masonry({
	    itemSelector: '.findit-listing',
	    percentPosition: true,
	    gutter: '#elm-findit-gutter-sizer',
	    transitionDuration: '0s'
	  });
	});

	/*Initializes the Masonry grid for Voices and Opinions modules on landing pages*/
	var $grid3 = $('.voices-landing-grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid3.masonry({
	    itemSelector: '.elm-voice-op-listing',
	    percentPosition: true,
	    gutter: '#voices-landing-gutter-sizer',
	    transitionDuration: '0s'
	  });
	});

}

$( window ).resize(function() {
	initializeElmMasonry();
});

$(document).ready(function() {
	initializeElmMasonry();
});