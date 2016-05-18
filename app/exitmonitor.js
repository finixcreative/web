window.onload = function(){
	var exitCount,
		exitMonitor,
		template,
		dismiss;
	exitCount = 0;
	exitMonitor = function(){
		if(exitCount === 0){
			$('#content').prepend(template);
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
		} else {
			return;
		}
	};
	template = "<div id='exitmonitor' class='pad-40-20 full'><h3>Wait up!</h3><button onclick='dismiss()'>nah</button></div>";
	dismiss = function(){
		$('#exitmonitor').remove();		
	};
	window.onmouseout = exitMonitor;
};