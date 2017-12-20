///////////////////////////////////////////////// VARS



/// Numbers
var sci = 0;
var money = 0;

/// Diff/sec
var mprofit = 0;
var sprofit = 0;

/// Sell resarch rights
var RR_sellamt = 1;
var RR_sellexp = 0;


/// Cog menu
var menu = false;


/// Classes
var stat = new Stat();
var hire = new Hire();
var upgr = new Upgrades();


function sellRR(i){
	if(i == undefined){
		if(sci >= RR_sellamt){
			money += RR_sellamt;
			sci -= RR_sellamt;
		} else {
			$("#sellRR .notenough").show();
			$("#sellRR .notenough").delay(500).fadeOut(1000);
		}
	} else {
		RR_sellexp+=i;
		if(RR_sellexp < 0) RR_sellexp = 0;
		RR_sellamt = Math.pow(10,RR_sellexp);
		$("#sellRR .amt").html(RR_sellamt);
	}
}

///////////////////////////////////////////////// FUNCTIONS -- COG MENU

function cogmenu(){
	// Toggle cog menu
	var box = $("#cogmenu");
	if(menu){
		box.animate({top:"100%"});
		$("#cog").animateRotate(0,-90);
		menu = false;
	} else {
		box.animate({top:$(document).height()-box.height()-10});
		$("#cog").animateRotate(0,90);
		menu = true;
	}
}



///////////////////////////////////////////////// REAAAAAAAADY TO RUUUUUUUMBLE!



$(document).ready(to);

function to(){
	loadDisplays().done(rumble)
}

function rumble(){
	console.log("Let's rumble, jQuery.");
	
	$("#content").html(display[0]);
	load();

	/// Intervals:
	setInterval(addProfit, 1000);
	setInterval(updateNumbers, 20);
	setInterval(save, 10000);
	setInterval(recalc, 5000);

	// Dynamic css
	$("#cog").css("top", $("#cog").height()*-1.25);
	$(".dropdown").css("max-width", $(document).width());
	
	/// hover in #hiring
	//$(".hire-entry").hover(descHover); $(".thing-desc").hide();

	$("#UserAgent").text(navigator.userAgent);
	
	recalc();
}
