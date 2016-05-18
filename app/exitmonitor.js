window.onload = function(){
	var exitCount,
		template,
		exitMonitor,
		dismiss;
	exitCount = 0;
	template = "<div id='exitmonitor' class='pad-40-20 full'><h3>Wait up!</h3><button id='dismiss'>Nah...</button></div>";
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
	$('button #dismiss').click(function(){
		$('#exitmonitor').remove();
	});
	window.onmouseout = exitMonitor;
};