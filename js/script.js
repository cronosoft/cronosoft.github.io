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
    var currentURL = "";
    var lastURL = "";
    $(document).scroll(function () {
        $('.anchor').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var URL = $(this).attr('name');


            console.log(currentURL);
            if (distance < 200 && distance > -200 && currentURL != URL) {
                if (currentURL != "") $("#" + currentURL + "-menu").removeClass('active');
                currentURL = URL;
                $("#" + currentURL + "-menu").addClass('active');

                if (currentURL == "despre") {
                    document.getElementById("obiect-gri").setAttribute("style", "opacity: 1;");
                }
                if (currentURL == "preturi") {
                    document.getElementById("obiect-gri-inchis").setAttribute("style", "opacity: 1;");
                }


                if (currentURL == "despre" || currentURL == "top") {
                    $("body").css("background-image", "url('img/poza2.jpg')");
                    $("body").css("background-size", "cover");
                    $("body").css("background-attachment", "fixed");
                }
            }
        });
    });
});
