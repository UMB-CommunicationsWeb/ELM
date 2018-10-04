/*Applies formatting to common calendar dates & times to conform to the university's style guide*/

jQuery( document ).ready(function() {
  
    /*Fixes an error in some browsers (lookin at you, Safari) caused by apostrophes in category names*/
	jQuery('#common_calendar a, .common_calendar a').each(function(){
        this.href = this.href.replace('\'', '%27');
    });
  
  	/*Applies additional formatting to dates and times*/
	jQuery('#common_calendar .eventdatetimeplace, #common_calendar .view_period_range, .common_calendar .eventdatetimeplace, .common_calendar .view_period_range').each(function() {
	    var html = jQuery(this).html();

	    html = html.replace(/12:00 AM/g, 'Midnight');
	    html = html.replace(/12:00 PM/g, 'Noon');
	    html = html.replace(/:00/g, '');
	    /*Only matches AM or PM if the character immediately following is not a letter. 
	    Apparently, JavaScript doesn't support regex look behinds.
	    In other words, only if "AM" or "PM" are not part of a longer word*/
	    html = html.replace(/ AM(?![a-zA-Z])/g, ' a.m.');
	    html = html.replace(/ PM(?![a-zA-Z])/g, ' p.m.');
	    html = html.replace(/ 0/g, ' ');
	    html = html.replace(/12:00 AM/g, 'Midnight');
	    html = html.replace(/January/g, 'Jan.');
	    html = html.replace(/February/g, 'Feb.');
	    html = html.replace(/March/g, 'Mar.');
	    html = html.replace(/April/g, 'Apr.');
	    html = html.replace(/August/g, 'Aug.');
	    html = html.replace(/September/g, 'Sept.');
	    html = html.replace(/October/g, 'Oct.');
	    html = html.replace(/November/g, 'Nov.');
	    html = html.replace(/December/g, 'Dec.');

	    jQuery(this).html(html);
	});
	jQuery('#common_calendar td a, .common_calendar td a').each(function() {
	    var html = jQuery(this).html();

	    html = html.replace(/^0/g, '');

	    jQuery(this).html(html);
	});
	jQuery('#common_calendar td, .common_calendar td').each(function() {
	    var html = jQuery(this).html();

	    html = html.replace(/^0/g, '');

	    jQuery(this).html(html);
	});

});
