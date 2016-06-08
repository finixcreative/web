window.onload = function(){
	var exitCount,
		template,
		exitMonitor;
	exitCount = 0;
	template = "<exitmonitor></exitmonitor>";
	exitMonitor = function(){
		if(exitCount === 0){
			$('#content').prepend(template);
			exitMonitorDismiss();
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
	$('html').mouseleave(exitMonitor);
};
function exitMonitorDismiss(){
	var dismiss;
	dismiss = function(){
		$(this).closest('#exitmonitor').hide();
		console.log("Exitmonitor dismissed");
	};
	$(document).ready(function(){
		$('#dismiss').click(dismiss);		
	});
};