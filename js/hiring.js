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
