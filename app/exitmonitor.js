window.onload = function(){
	var exitCount = 0,
		exitMonitor;
	exitMonitor = function(){
		if(exitCount === 0 && confirm("Are you suuuuure?")){
			exitCount++;
			return;
		} else {
			console.log("Exitmonitor disabled. Exits: " + exitCount)
			return;
		}
	};
	window.onmouseout = exitMonitor;
};