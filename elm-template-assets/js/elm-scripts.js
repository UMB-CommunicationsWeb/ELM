/*Custom JS scripts for the Elm web templates
Developed by UMB' communications web team.*/

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------

# Menus
# Featured items (Type A)
# Featured items (Type B)
# Smooth scroll
# Back to top

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

/*--------------------------------------------------------------
# Featured items (Type A)
--------------------------------------------------------------*/

$( ".elm-feature-typeA .elm-feature-typeA-item" ).hover(function() {
  $( ".elm-feature-typeA .elm-feature-typeA-item" ).removeClass("elm-feature-focus");
  $( this ).addClass("elm-feature-focus");
});

$( ".elm-feature-typeA .elm-feature-typeA-item" ).focus(function() {
  $( ".elm-feature-typeA .elm-feature-typeA-item" ).removeClass("elm-feature-focus");
  $( this ).addClass("elm-feature-focus");
});

/*--------------------------------------------------------------
# Featured items (Type B)
--------------------------------------------------------------*/

$( ".elm-feature-typeB .elm-feature-typeB-item" ).hover(function() {
  $( ".elm-feature-typeB .elm-feature-typeB-item, .elm-feature-typeB .elm-feature-typeB-focus" ).removeClass("elm-feature-focus");
  var currentSlideIndex = $( ".elm-feature-typeB .elm-feature-typeB-item").index($( this ));
  $( this ).addClass("elm-feature-focus");
  $( ".elm-feature-typeB .elm-feature-typeB-focus" ).each(function( index ) {
     if ($( ".elm-feature-typeB .elm-feature-typeB-focus" ).index($( this )) == currentSlideIndex) {
      $( this ).addClass("elm-feature-focus");
     }
  });
});

$( ".elm-feature-typeB .elm-feature-typeB-item" ).focus(function() {
  $( ".elm-feature-typeB .elm-feature-typeB-item, .elm-feature-typeB .elm-feature-typeB-focus" ).removeClass("elm-feature-focus");
  var currentSlideIndex = $( ".elm-feature-typeB .elm-feature-typeB-item").index($( this ));
  $( this ).addClass("elm-feature-focus");
  $( ".elm-feature-typeB .elm-feature-typeB-focus" ).each(function( index ) {
     if ($( ".elm-feature-typeB .elm-feature-typeB-focus" ).index($( this )) == currentSlideIndex) {
      $( this ).addClass("elm-feature-focus");
     }
  });
});

/*--------------------------------------------------------------
# Smooth scroll
--------------------------------------------------------------*/

function configureSmoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}

$( document ).ready(function(){ 
  configureSmoothScroll();
});

/*--------------------------------------------------------------
# Back to top
--------------------------------------------------------------*/

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $("#elm-back-to-top").fadeOut();
    } else {
        $("#elm-back-to-top").fadeIn();
    }
});