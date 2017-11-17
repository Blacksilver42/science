// Default values. Keep handy to prevent accuracy loss.
var BASE_EMPLOY_DATA = {
	intern:	{
		amt: 0,
		cost: 100,
		click: 1
	},
	accountant: {
		amt: 0,
		cost: 500,
		sellRR: 1
	}
};

var employ = JSON.parse(JSON.stringify(BASE_EMPLOY_DATA)); // Lazy deep clone

var EMPLOY_INCREASE = 1.15;

class Hire {
	constructor(){
		this.update();
	}

	update(){
		clickamt = 1;
		for(var key in employ){
			var x = employ[key];
			// Recalculate cost
			x.cost = Math.floor(BASE_EMPLOY_DATA[key].cost * Math.pow(EMPLOY_INCREASE, x.amt));
			// update values in hire dropdown
			$("#hire-"+key+" .hire-amt").text(x.amt);
			$("#hire-"+key+" .hire-cost").text(x.cost);
			// if they increas the click amount update that too.
			if(x.click != undefined) clickamt += x.click * x.amt;
		}
		$("#sciPerClick").text(clickamt);
	}

	hire(type) {
		// Hire an employee
		if(money < employ[type].cost) return;
		money -= employ[type].cost;
		employ[type].amt++;
		this.update();
	}

	fire(type) {
		// Fire an employee
		if(employ[type].amt < 1) return;
		employ[type].amt--;
		this.update();
		money += employ[type].cost/2
	}

}
