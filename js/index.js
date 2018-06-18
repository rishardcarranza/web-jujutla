/* Variables globales */
var $main = $("#main"),
	counter = 1;

$(document).ready(function () {
	// menuClick();
	// menuMobClick();
	// menuColor();
	$main.load("pages/start.html?nocache="+getRandomValue(), loadSlider);
	$main.fadeIn("slow");
	// loadFancybox();
	// loadScroll();
});

menuClick = function () {
	$("li").on("click",function () {
		var opt = $(this).attr("id"); // Get "id" attribute of "li" tag
		$main.hide();
		// Option to run
		if (opt == "inicio") {
			$main.load("pages/inicio.html?nocache="+getRandomValue(), loadSlider);
		}else{
			$main.load("pages/"+opt+".html?nocache="+getRandomValue());
		}
		$main.fadeIn();
	});
}

menuMobClick = function (){
	$(".menu_bar").on("click",function () {
		if(counter == 1){
			$("nav").animate({
				"left": "0"
			});
			counter = 0;
		} else {
			counter = 1;
			$("nav").animate({
				"left": "-100%"
			});
		}
	});
};

menuColor = function () {
	// var arrColors = ["#00d431","#da0000","#dacd00","#da7100","#009de9"]
	$("#nav1 li").on("mouseover",function () {
		var opt = $(this).attr("id"); // Get "id" attribute of "li" tag
		// Change color of menu
		switch (opt) {
			case "inicio":
				$(this).css("background-color","#009de9");
				break;
			case "nosotros":
				$(this).css("background-color","#00d431");
				break;
			case "servicios":
				$(this).css("background-color","#da0000");
				break;
			case "noticias":
				$(this).css("background-color","#e9009d");
				break;
			case "galeria":
				$(this).css("background-color","#dacd00");
				break;
			case "contacto":
				$(this).css("background-color","#da7100");
				break;
		}
	});
	$("#nav1 li").on("mouseleave",function () {
		var opt = $(this).attr("id"); // Get "id" attribute of "li" tag
		// Change default color
		switch (opt) {
			case "inicio":
			case "nosotros":
			case "servicios":
			case "noticias":
			case "galeria":
			case "contacto":
				$(this).css("background-color","#7fffd4");
				break;
		}
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
