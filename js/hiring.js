var employ_costs = {
	intern:	100,
	accountant: 500
};

var EMPLOY_INCREASE = 1.15;
var ARROW_TIME = 700
var hiretgl_running = 0;

class Hire {
	constructor(){
		this.employ = {
			intern:		0,
			accountant:	0
		}
		this.show = false;
	}

	toggle(){
		if(hiretgl_running>0)return;
		hiretgl_running = 2;
		$("#hiring").animate({width: "toggle", height:"toggle"}, 1000, function(){hiretgl_running--});
		var arrow = $("#hiring-button .droparrow");
		if(this.show){
			// currently open; hide.
			arrow.animateRotate(90,360,ARROW_TIME, 'swing', function(){hiretgl_running--});
			this.show = false;
		} else {
			// currently hidden; open.
			arrow.animateRotate(0,-270,ARROW_TIME, 'swing', function(){hiretgl_running--});
			this.show = true;
		}
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
