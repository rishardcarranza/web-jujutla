/* Variables globales */
var $main = $("#main");
	counter = 1;

$(document).ready(function () {
	menuClick();
	// menuMobClick();
	// menuColor();
	$main.load("pages/start.html?nocache="+getRandomValue(), loadSlider);
	$main.fadeIn("slow");
	// loadFancybox();
	// loadScroll();
});

menuClick = function () {
	$("li a").on("click",function () {
		var opt = $(this).attr("id"); // Get "id" attribute of "li" tag

		$main.empty();
		$main.hide();
		// Option to run
		switch (opt) {
			case "start":
				$main.load("pages/start.html?nocache="+getRandomValue(), loadSlider);
				break;

			case "mayoralty":
				$main.load("pages/mayoralty.html?nocache="+getRandomValue());
				break;

			default:

				break;
		}
		
		$main.fadeIn();
	});
}


loadSlider = function () {
	$('#camera_wrap_1').camera({
		hover: false,
		barPosition: 'top',
		height: '600px',
		loader: 'bar',
		loaderColor: '#4CAF50',
		loaderBgColor: '#FFFFFF',
		loaderOpacity: 0.8,
		pagination: false,
		time: 6000,
		transPeriod: 2000,
		easing: 'easeInOutBounce',
		fx: 'stampede,mosaicRandom,blindCurtainBottomLeft,blindCurtainBottomRight,scrollHorz'
	});
}

loadFancybox = function () {
	$(".fancybox").fancybox({
		openEffect	: "elastic",
		closeEffect	: "elastic",
		helpers : {
    		title : null
    	}
	});
}

loadScroll = function () {
	$(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ "scrollTop": "0" }, 600);
        return false;
    });
}

getRandomValue = function () {
	return Math.random()*100000000000000000;
}
