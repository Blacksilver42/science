// Credit: stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate

$.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete){
    return this.each(function(){
        var elem = $(this);

        $({deg: startAngle}).animate({deg: endAngle}, {
            duration: duration,
            easing: easing,
            step: function(now){
                elem.css({
                  '-moz-transform':'rotate('+now+'deg)',
                  '-webkit-transform':'rotate('+now+'deg)',
                  '-o-transform':'rotate('+now+'deg)',
                  '-ms-transform':'rotate('+now+'deg)',
                  'transform':'rotate('+now+'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};
var EMPLOY_INCREASE = 1.15;
var clickamt = 1;

var profits = {
	sci: 0,
	money: 0
};

var raw_profits = JSON.parse(JSON.stringify(profits));

var BASE_EMPLOY_DATA = {
	intern:	{
		amt: 0,
		cost: 100,
		click: 1
	},
	accountant: { // name changed to SpreadBot
		amt: 0,
		cost: 500,
		profits: {
			sci: -1,
			money: 1
		}
	},
	assist: {
		amt: 0,
		cost: 0,
		profits: {
			sci: 2,
			money: -1
		}
	}
};

var vstats = {
	sci_total: 0,
	money_total: 0
}
var ARROW_TIME = 500;
var MOVE_TIME = 800;

function toggleDropMenu(id){
	var arrow = $(id).siblings(".dropbutton").children(".droparrow");
	
/*	if($(id).css('width') != "400px"){
		console.log("Stop it!");
		return;
	}
*/

	if($(id).css('display') == 'block'){
		// currently open; hide.
		arrow.animateRotate(90,360,ARROW_TIME, 'swing');
	} else  {
		// currently hidden; open.
		arrow.animateRotate(0,-270,ARROW_TIME, 'swing');
	}
	$(id).animate({width: "toggle", height:"toggle", padding:"toggle"}, MOVE_TIME, 'swing');
}
var employ = JSON.parse(JSON.stringify(BASE_EMPLOY_DATA)); // Lazy deep clone


class Hire {
	constructor(){
		this.update();
	}

	update(){
		stat.clickamt = 1;
		for(var key in employ){
			var x = employ[key];
			// Recalculate cost
			x.cost = Math.floor(BASE_EMPLOY_DATA[key].cost * Math.pow(EMPLOY_INCREASE, x.amt));
			// update values in hire dropdown
			$("#hire-"+key+" .hire-amt").text(x.amt);
			$("#hire-"+key+" .hire-cost").text(x.cost);
			// if they increas the click amount update that too.
			if(x.click != undefined) stat.clickamt += x.click * x.amt;
		}
		$("#sciPerClick").text(stat.clickamt);
	}

	hire(type) {
		// Hire an employee
		if(money < employ[type].cost) return;
		money -= employ[type].cost;
		employ[type].amt++;
		recalc();
	}

	fire(type) {
		// Fire an employee
		if(employ[type].amt < 1) return;
		employ[type].amt--;
		recalc();
		money += employ[type].cost/2
	}

}
class Stat {
	constructor(){
		this.clickamt = 1;
		this.update();
	}
	
	update(){
		var box = $("#stats table");
		profits.sci = 0;
		profits.money = 0;
		for(var key in employ){
			if(employ[key].profits == undefined) continue;
			if(employ[key].profits.sci != undefined) profits.sci += employ[key].profits.sci * employ[key].amt;
			if(employ[key].profits.money != undefined) profits.money += employ[key].profits.money * employ[key].amt;
		}
		$("#stats .sci").text(profits.sci);
		$("#stats .money").text(profits.money);
	}
}
var upgrade_data = [ // List of upgrades
	{
		name: "Better coffee",
		desc: "More caffiene => less time sleeping => more SCIENCE!",
		cost: 2000,
		unlock: 500,
		unlock_type: "money",
		mod: {
			click_mult: 2
		}
	}
]

var upgrade = [] // unlocked upgrades

class Upgrades {
	constructor(){
		//this.update();
	}
	
	buy(n){
		var x = upgrade_data[n];
		// this is terrible practice but whatever.
		if(window[x.unlock_type] < x.unlock) return;
		window[x.unlock_type] -= x.cost;
		upgrade.push(n);
		this.fix();
	}
	
	fix(){
		// remove dupes & sort
		upgrade = Array.from(new Set(upgrade));
		upgrade.sort(function(a, b){return a-b});

	}
}
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
	$("#sci").html(thousep2(sci));
	$("#money").html(thousep2(money));
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
