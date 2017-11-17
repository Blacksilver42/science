var employ_costs = {
	intern:	100,
	accountant: 500
};

var EMPLOY_INCREASE = 1.15;

class Hire {
	constructor(){
		this.employ = {
			intern:		0,
			accountant:	0
		}
		this.show = false;
	}


	updateEmploy(){
		for(var key in this.employ){
			$("#hire-"+key+" .hire-amt").text(this.employ[key])
			$("#hire-"+key+" .hire-cost").text(Math.floor(employ_costs[key] * Math.pow(EMPLOY_INCREASE,this.employ[key])))
		}
	}

	hire(type) {
		this.employ[type]++;
		this.updateEmploy();
	}

	fire(type) {
		if(this.employ[type] < 1) return;
		this.employ[type]--;
		this.updateEmploy();
	}

}
