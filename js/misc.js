function ocd(){
	money = Math.floor(money);
	sci = Math.floor(sci);
	recalc();
}

function recalc(){ // call ALL the update functions
	hire.update();
	stat.update();
	updateNumbers();
	$("atom").html("&#9883;");
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
