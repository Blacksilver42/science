class Stat {
	constructor(){
		this.clickamt = 1;
		this.update();
	}
	
	update(){
		var box = $("#stats table");
		profits.sci = 0;
		profits.money = 0;
		for(var key in employ){
			if(employ[key].profits == undefined) continue;
			if(employ[key].profits.sci != undefined) profits.sci += employ[key].profits.sci * employ[key].amt;
			if(employ[key].profits.money != undefined) profits.money += employ[key].profits.money * employ[key].amt;
		}
		$("#stats .sci").text(profits.sci);
		$("#stats .money").text(profits.money);
	}
}
