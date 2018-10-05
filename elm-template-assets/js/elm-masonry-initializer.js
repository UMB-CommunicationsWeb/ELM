
$( document ).ready(function() {

	/*Initializes the MAsonry grid for full Elm topic feeds*/

	var $grid = $('.elm-feed-main').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    itemSelector: '.elm-feed-listing',
	    percentPosition: true,
	    gutter: '#elm-feed-gutter-sizer'
	  });
	});

	var $grid2 = $('.findit-landing-grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid2.masonry({
	    itemSelector: '.findit-listing',
	    percentPosition: true,
	    gutter: '#elm-findit-gutter-sizer'
	  });
	});

});