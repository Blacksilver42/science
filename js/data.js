var EMPLOY_INCREASE = 1.15;
var clickamt = 1;

var profits = {
	sci: 0,
	money: 0
};

var BASE_EMPLOY_DATA = {
	intern:	{
		amt: 0,
		cost: 100,
		click: 1
	},
	accountant: {
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

