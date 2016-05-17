window.onload = function(){
	var exitCount, exitMonitor;
	/*
	var saved;
	$('a').on('click', function(){
		saved = true;
	});
	$('form').on('submit', function(){
		saved = true;
	});
	*/
	exitCount = 0;
	exitMonitor = function(){
		if(exitCount = 0){
			confirm("Are you suuuuure?");
			exitCount++;
			return;
		} else {
			console.log("Exitmonitor disabled. Exits: " + exitCount)
			return;
		}
	};
	window.onmouseout = exitMonitor;
};