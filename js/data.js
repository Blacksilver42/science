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
