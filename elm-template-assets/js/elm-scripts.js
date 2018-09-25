/*Custom JS scripts for the Elm web templates
Developed by UMB' communications web team.*/

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------

# Menus

--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Menus
--------------------------------------------------------------*/

var menuSpeed = 200;

function toggleTopicsDesktop() {
	$('.secondaryNav:not(#nav-topics)').slideUp(menuSpeed, function() {
   		/*Executes after other open menus have finished slideUp*/
   		$('#nav-topics').slideToggle(menuSpeed);
	});
}

function toggleSchoolsDesktop() {
	$('.secondaryNav:not(#nav-schools)').slideUp(menuSpeed, function() {
   		/*Executes after other open menus have finished slideUp*/
   		$('#nav-schools').slideToggle(menuSpeed);
	});
}

function toggleMobileMenu(x) {
    x.classList.toggle('change');
    $('#elmMainNavigation-mobile').slideToggle(menuSpeed);
}