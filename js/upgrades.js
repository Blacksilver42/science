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
