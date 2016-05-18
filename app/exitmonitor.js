window.onload = function(){
	var exitCount,
		template,
		exitMonitor,
		dismiss;
	exitCount = 0;
	template = "<div id='exitmonitor' class='configpanel white-txt pad-150-20 center full'><h3>Wait up!</h3><button id='dismiss'>Nah...</button></div>";
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
	dismiss = function(){
		$(this).closest('#exitmonitor').hide();
		console.log("Exitmonitor dismissed");
	};
	$('#exitmonitor button').click(dismiss);
	$('html').mouseleave(exitMonitor);
};