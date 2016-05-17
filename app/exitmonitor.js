window.onload = function(){
	var exitCount,
		exitMonitor;
	exitCount = 0;
	exitMonitor = function(){
		if(exitCount === 0 && confirm("Are you suuuuure?")){
			exitCount++;
			return;
		} else if(exitCount === 1){
			exitCount++;
			console.log("Exitmonitor disabled\nExits: " + exitCount)
			return;
		} else if(exitCount > 1){
			exitCount++;
			console.log("Exits: " + exitCount)
			return;
		}
	};
	window.onmouseout = exitMonitor;
};