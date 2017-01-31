$(document).ready(function(){

	(function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
            $('#nav-icon1').toggleClass('open');
		});
    
        $('#site-cache').click(function(e){
          $('body').removeClass('with--sidebar');
          $('#nav-icon1').removeClass('open');
        });

        $('.search__icon').click(function(e){
            $(this).parent().toggleClass('search--open');
            $('.search--open > .search__bar > input').focus();
        });
	})(jQuery);

});

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 1,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();