var ARROW_TIME = 500;
var MOVE_TIME = 800;

function toggleDropMenu(id){
	var arrow = $(id).siblings(".dropbutton").children(".droparrow");
	
/*	if($(id).css('width') != "400px"){
		console.log("Stop it!");
		return;
	}
*/

	if($(id).css('display') == 'block'){
		// currently open; hide.
		arrow.animateRotate(90,360,ARROW_TIME, 'swing');
	} else  {
		// currently hidden; open.
		arrow.animateRotate(0,-270,ARROW_TIME, 'swing');
	}
	$(id).animate({width: "toggle", height:"toggle", padding:"toggle"}, MOVE_TIME, 'swing');
}
