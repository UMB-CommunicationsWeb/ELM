/*The Elm Calendar JavaScript*/
/*Modified slightly from the existing Common Calendar JavaScript file in fall 2018 for the redesigned Elm templates*/

/*Enables Pagination*/
jQuery(function($) {

    var items = $("#common_calendar #calendar_events .event, .common_calendar .calendar_events .event");

    var numItems = items.length;
    var perPage = 12;

    if (numItems > perPage) {

    // only show the first 2 (or "first per_page") items initially
    items.slice(perPage).hide();

    // now setup your pagination
    //Adds a div at the end of the events list to hold the pagination controls
	$("#common_calendar #calendar_events, .common_calendar .calendar_events").append('<div class="pagination-page"></div>');
    // you need that .pagination-page div before/after your table
    $(".pagination-page").pagination({
        items: numItems,
        itemsOnPage: perPage,
        onPageClick: function(pageNumber) { 
            // someone changed page, lets hide/show events appropriately
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            items.hide() // first hide everything, then show for the new page
                 .slice(showFrom, showTo).show();
        }
    });
	}
});


/*Enforces an either/or relationship between a category and its sub-categories*/

/*On page load, if a category is checked, uncheck its subcategories*/
$( document ).ready(function() {
	/*Finds all category check boxes*/
	var cats = document.getElementsByName('category');
	/*For every category box that is checked, the appropriate category parameter is appended to all links in the calendar*/
	for(var i = 0; i < cats.length; ++i) 
	{	
	    if(cats[i].checked){
	    	$(cats[i]).parent().next('.subcategory_group').children('.subcategory').children('input').prop("checked", false);
	    }
	}
});

/*If the viewer checks a category check-box, all of its sub-categories are automatically unchecked*/
$( ".category input" ).on( "change", function() {
	if (this.checked) {
		$(this).parent().next('.subcategory_group').children('.subcategory').children('input').prop("checked", false);
	}
});

/*If the viewer checks a subcategory check-box, the category above it is automatically unchecked*/
$( ".subcategory input" ).on( "change", function() {
	if (this.checked) {
		$(this).parent().parent('.subcategory_group').prev('.category').children('input').prop("checked", false);
	}
});





/*Enables the 'expandable' sub-categories
/*Requires JQuery*/

$( document ).ready(function() {
	/*The original PHP calendar outputs several hidden sub-categories that should be ignored. The following lines give all other sub-categories the class "legitimate". */
	$('#common_calendar .subcategory, .common_calendar .subcategory').each(function() {
	    if ($(this).is(':visible')) {
			$(this).addClass('legitimate');
		}
	});
	/*Hides all but the first 2 sub-categories below each category.*/
	$('#common_calendar .subcategory_group, .common_calendar .subcategory_group').each(function() {
	   if ( $(this).children('.subcategory.legitimate').length > 2 ) {
	   		$(this).children('.subcategory.legitimate').slice(2).hide();
	   		/*Creates the "See All" link, and applies a behaviour to it on click*/
	   		var newBtn = $('<div class="see_all">See all</div>').click(function () {
	   			$(this).siblings('.subcategory.legitimate').show();
	   			$(this).siblings('.hide_all').show();
	   			$(this).hide();
	   		});
	   		$(this).append(newBtn);
	   		/*Creates the "Hide" link, and applies a behaviour to it on click*/
	   		var newBtn2 = $('<div class="hide_all" style="display:none;">Hide</div>').click(function () {
	   			$(this).siblings('.subcategory.legitimate').slice(2).hide();
	   			$(this).siblings('.see_all').show();
	   			$(this).hide();
	   		});
	   		$(this).append(newBtn2);
	   	}
	});
	/*Reveals all sub-categories in a group is a sub-category is selected on page load*/
	$('#common_calendar .subcategory input, .common_calendar .subcategory input').each(function() {
	    if (this.checked) {
			$(this).parent().siblings('.subcategory.legitimate').show();
			$(this).parent().show();
	   		$(this).parent().siblings('.hide_all').show();
	   		$(this).parent().siblings('.see_all').hide();
		}
	});
});

/*Reveals all sub-categories in a group is a sub-category is toggled*/
$( "#common_calendar .subcategory input, .common_calendar .subcategory input" ).on( "change", function() {
	if (this.checked) {
		$(this).parent().siblings('.subcategory.legitimate').show();
	   	$(this).parent().siblings('.hide_all').show();
	   	$(this).parent().siblings('.see_all').hide();
	}
});





/*Adds links to the category names that display on top of the page. Requires JQuery*/

$( document ).ready(function() {
	$('#common_calendar .category_header, .common_calendar .category_header').each(function() {
	    var html = $(this).html();

	    html = html.replace(/University Administration/g, '<a href="http://umaryland.edu/" target="_blank">University Administration</a>');
	    html = html.replace(/School of Nursing/g, '<a href="http://www.nursing.umaryland.edu/" target="_blank">School of Nursing</a>');
	    html = html.replace(/School of Pharmacy/g, '<a href="http://www.pharmacy.umaryland.edu/" target="_blank">School of Pharmacy</a>');
            html = html.replace(/School of Medicine/g, '<a href="http://medschool.umaryland.edu/" target="_blank">School of Medicine</a>');
            html = html.replace(/School of Social Work/g, '<a href="http://www.ssw.umaryland.edu/" target="_blank">School of Social Work</a>');
            html = html.replace(/School of Dentistry/g, '<a href="http://www.dental.umaryland.edu/" target="_blank">School of Dentistry</a>');
            html = html.replace(/Campus Life Services/g, '<a href="http://www.umaryland.edu/campuslife/" target="_blank">Campus Life Services</a>');
            html = html.replace(/Graduate School/g, '<a href="http://graduate.umaryland.edu/" target="_blank">Graduate School</a>');
            html = html.replace(/Office of Research and Development/g, '<a href="http://www.ord.umaryland.edu/" target="_blank">Office of Research and Development</a>');
      		html = html.replace(/Carey School of Law/g, '<a href="http://www.law.umaryland.edu/index.html" target="_blank">Carey School of Law</a>');
            html = html.replace(/School of Law/g, '<a href="http://www.law.umaryland.edu/index.html" target="_blank">School of Law</a>');
            html = html.replace(/Health Sciences and Human Services Library/g, '<a href="http://www.hshsl.umaryland.edu/" target="_blank">Health Sciences and Human Services Library</a>');
            html = html.replace(/Student Organizations/g, '<a href="http://www.umaryland.edu/university-life/student-groups/" target="_blank">Student Organizations</a>');
      		html = html.replace(/MPowering the State/g, '<a href="http://mpower.maryland.edu/" target="_blank">MPowering the State</a>');
            
	    /* Update to accomodate additional schools / categories as needed */
	    /* Update to accomodate additional schools / categories as needed */
            


	    $(this).html(html);
	});

});


