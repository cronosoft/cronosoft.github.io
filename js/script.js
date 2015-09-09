var scrollTo = function(element) {
	$("html, body").animate({ scrollTop: $(element).offset().top}, 1000);
}

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if( $(this).attr("href")=="#carousel") return;
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
});

$(function () {
    var currentURL = ""
    $(document).scroll(function () {
        $('.anchor').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var URL = $(this).attr('name');

            if (distance < 200 && distance > -200 && currentURL != URL) {
                if (currentURL != "") $("#" + currentURL + "-menu").removeClass('active');
                currentURL = URL;
                console.log("#" + currentURL + "-menu");
                $("#" + currentURL + "-menu").addClass('active');
            }
        });
    });
});
