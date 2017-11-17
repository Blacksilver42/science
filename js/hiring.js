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

var employ = JSON.parse(JSON.stringify(BASE_EMPLOY_DATA));

var EMPLOY_INCREASE = 1.15;

class Hire {
	constructor(){
		this.updateEmploy();
	}


	updateEmploy(){
		for(var key in employ){
			employ[key].cost = Math.floor(BASE_EMPLOY_DATA[key].cost * Math.pow(EMPLOY_INCREASE, employ[key].amt));
			$("#hire-"+key+" .hire-amt").text(employ[key].amt);
			$("#hire-"+key+" .hire-cost").text(employ[key].cost);
		}
		clickamt = 1;
		for(var key in employ){
			var x = employ[key]
			if(x.click != undefined) clickamt += x.click * x.amt;
		}
		$("#sciPerClick").text(clickamt);
	}

	hire(type) {
		if(money < employ[type].cost) return;
		money -= employ[type].cost;
		employ[type].amt++;
		this.updateEmploy();
	}

	fire(type) {
		if(employ[type].amt < 1) return;
		employ[type].amt--;
		this.updateEmploy();
		money += employ[type].cost/2
	}

}
