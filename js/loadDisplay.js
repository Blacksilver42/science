var display_files = ["main.html", "upgr.html", "achv.html"];
var nfiles = display_files.length;
var display_promises = [];

function loadDisplays(){
	for(var i=0;i<nfiles;i++){
		display_promises.push(new $.Deferred());
	}
	setTimeout(doLoads, 0);	
	return $.when(...display_promises);
}

function doLoads(){
	for(var i=0;i<nfiles;i++){
		display[i] = $("<div>").load(display_files[i], display_promises[i].resolve);
	}
}
