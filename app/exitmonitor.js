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
		if(exitCount > 0){
			console.log("Exitmonitor disabled. Exits: " + exitCount)
			return;
		} else {
			confirm("Are you suuuuure?");
			exitCount++;
		}
	};
	window.onmouseout = exitMonitor;
};