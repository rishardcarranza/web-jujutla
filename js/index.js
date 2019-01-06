/* Variables globales */
var $main = $("#main");
var $carContainer = $("#mayor-menu");
//var $cardContainer = $("#servi-menu");
var	counter = 1;
var opt = "";

$(document).ready(function () {
	menuClick();
	// menuMobClick();
	// menuColor();
	$main.load("pages/start.html?nocache="+getRandomValue(), loadSlider);
	$main.fadeIn("slow");
	// loadFancybox();
	// loadScroll();

	
});

hoverCard = function() {
	$("#mayor-menu .card").hover(
		function() {
			$(this).removeClass("border-success");
			$(this).addClass("border-primary");
			$(this).find(".card-header").removeClass("bg-success");
			$(this).find(".card-header").addClass("bg-primary");
		},
		function() {
			$(this).removeClass("border-primary");
			$(this).addClass("border-success");
			$(this).find(".card-header").removeClass("bg-primary");
			$(this).find(".card-header").addClass("bg-success");
		}
	);
}

menuClick = function () {
	$("#navbarMain li a").click(function (e) {
		opt = $(this).attr("id"); // Get "id" attribute of "li" tag

		// Active clicked element
		$("#navbarMain li").removeClass("active");
		$(this).parent(".nav-item").addClass("active");
		// console.log($(this).parent(".nav-item"))
		$main.empty();
		$main.hide();
		$main.fadeIn(function() {
			$("div#mayor-menu div.card.border-success").click(function(e) {
				// console.log($(this).attr("id"));
				opt = $(this).attr("id");
				optionToExecute(opt);
			});	
		});

		optionToExecute(opt);
	});
}

optionToExecute = function(opt) {
	// console.log(opt)
	// Option to run
	switch (opt) {
		case "start":
			$main.load("pages/start.html?nocache="+getRandomValue(), loadSlider);
			break;

		case "mayoralty":
			$main.load("pages/mayoralty.html?nocache="+getRandomValue(), hoverCard);
			break;

		case "government":
			$main.load("pages/mayoralty/government.html?nocache="+getRandomValue(), hoverCard);
			break;

		case "history":
			$main.load("pages/mayoralty/history.html?nocache="+getRandomValue(), hoverCard);
			break;

		case "tourism":
			$main.load("pages/mayoralty/tourism.html?nocache="+getRandomValue(), hoverCard);
			break;

		case "citizen":
			$main.load("pages/mayoralty/citizen.html?nocache="+getRandomValue(), hoverCard);
			break;

		case "register":
			$main.load("pages/services/register.html?nocache="+getRandomValue(), hoverCard);
		break;

		//services menu	
		case "services":
			$main.load("pages/services.html?nocache="+getRandomValue(), hoverCard);
		break;

		case "registre":
			$main.load("pages/services/registre.html?nocache="+getRandomValue(), hoverCard);
			break;
		case "catastre":
			$main.load("pages/services/catastre.html?nocache="+getRandomValue(), hoverCard);
			break;
		case "permits":
			$main.load("pages/services/permits.html?nocache="+getRandomValue(), hoverCard);
			break;

		case "public":
			$main.load("pages/services/public.html?nocache="+getRandomValue(), hoverCard);
			break;

		// Portal menu	
		case "portal":
			$main.load("pages/transparency.html?nocache="+getRandomValue(), hoverCard);
		break;

		case "information":
			$main.load("pages/transparency/information.html?nocache="+getRandomValue(), hoverCard);
		break;

		case "laws":
			$main.load("pages/transparency/laws.html?nocache="+getRandomValue(), hoverCard);
		break;

		case "budgets":
			$main.load("pages/transparency.html?nocache="+getRandomValue(), hoverCard);
		break;

		case "portal":
			$main.load("pages/transparency.html?nocache="+getRandomValue(), hoverCard);
		break;

		default:
			console.log("Option isn't controllable: " + opt);
			break;

		
	}
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

/////////////////////////////////////////////////////////////////////////

//Clik menu servicios 



