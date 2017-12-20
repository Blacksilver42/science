function save(){
	localStorage["science_save"] = JSON.stringify({
		sci: sci,
		money: money,
		vstats: vstats,
		employ: employ,
	});
	$("#saved").show();
	$("#saved").delay(500).fadeOut();
}

function load(){
	var x = localStorage["science_save"];
	if(x == undefined) return;
	x = JSON.parse(x);
	sci = x.sci;
	money = x.money;
	vstats = x.vstats;
	employ = x.employ;
	recalc();
}

