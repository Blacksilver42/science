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

///////////////////////////////////////////////// FUNCTIONS -- MISC

function recalc(){ // call ALL the update functions
	hire.update();
	stat.update();
	updateNumbers();
}

function clickbutton(){ // called when you click the button
	sci+=stat.clickamt;
}

function updateNumbers(){ // Update top numbers
	$("#sci").html(sci);
	$("#money").html(money);
}

function addProfit(){
	if((sci + profits.sci >= 0) && (money + profits.money >= 0)){
		sci += profits.sci;
		money += profits.money;

		vstats.sci_total += profits.raw_sci;
		vstats.money_total += profits.raw_money;

		$("#header-numbers").css("color","black");
	} else {
		$("#header-numbers").css("color","red");
	}
}

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

function descHover(e){
	var obj = $(e.target);
	if(!obj.hasClass("hire-entry")){
		obj = obj.parent(".hire-entry");
	}
	obj = obj.children(".thing-desc");
	obj.animate({height:"toggle", margin:"toggle"}, 'swing');
}


function save(){
	Cookies.set('SCIENCE', {
		sci: sci,
		money: money,
		vstats: vstats,
		employ: employ,
	});
	$("#saved").show();
	$("#saved").delay(500).fadeOut();
}

function load(){
	var x = Cookies.get('SCIENCE');
	if(x == undefined) return;
	x = JSON.parse(x);
	sci = x.sci;
	money = x.money;
	vstats = x.vstats;
	employ = x.employ;
	recalc();
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



$(document).ready(function(){
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
});
