class Stat {
	constructor(){
		this.update();
	}
	
	update(){
		var box = $("#stats table");
		$("#stats #sci-diff").text(sprofit);
		$("#stats #m-diff").text(mprofit);
	}
}
