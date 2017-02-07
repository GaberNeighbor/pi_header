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

        $('.search__button').click(function(e){
            search();
        });

        $(".search__input").keypress(function(e) {
            if(e.which == 13) {
                search(); 
            }
        });

	})(jQuery);

});

function search() {
    var input = $('.search__input').val();
    var win = window.open('https://predictiveindex.force.com/knowledgebase/s/search/All/Home/' + input);
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
}

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