	

$('document').ready( function(){

	// Init active menu current page
	$('.'+current_page).addClass('active');

	
	
	// Envoi des infos
	$('#validation').click(function(){
var nom,email;
nom = $('#nom').val();
email = $('#mail').val();
if ((nom.length>0) && (email.length>0))
{
		mixpanel.identify(mixpanel.get_distinct_id());
		mixpanel.people.set({
			"$nom": nom,
			"$created": new Date(),
			"$email": email
		});
		ga('send', 'event', 'form', 'submit','ok',1);
		 $('#bravo').show(); 
		 $('#mail').hide(); 
		 $('#nom').hide(); 
		 $('#validation').hide(); 
} else $('#alerte').show();
	});
	

	
	// onScroll fix navbar article
	var navbar = $(".navbar");
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 380) {
			navbar.removeClass('navbar-static-top').addClass("navbar-fixed-top");
			$('.navbar-right .system').removeClass('hide');
			$('.navbar-right .dropdown').addClass('hide');
		} else {
			navbar.removeClass("navbar-fixed-top").addClass('navbar-static-top');
			$('.navbar-right .system').addClass('hide');
			$('.navbar-right .dropdown').removeClass('hide');
		}
	});

	// Home page - Click to scroll down smoothly
	$('a.getmore[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	
	// Tracking des liens via Mixpanel
	mixpanel.track_links("#footer .blog", "Website: blog", {Source: "footer"});
//	mixpanel.track_links(".g-plusone", "Website: share", {Source: "google_plus"});

});
