window.onload = function($scope, $http){
	var exitCount = 0,
		pageData = 'app/contents/exitmonitor.json',
		exitMonitor;
	$scope.template = 'app/modules/hydra/hydra.html';
	$scope.contents = [];
	$http.get(pageData).then(
		function success(response){
			//success callbacks
			$scope.contents = response.data;
		},
		function error(response){
			//error callbacks
			$scope.contents = response.data;
			$scope.errors = response.error;
			if($scope.errors == undefined){
				$location.url("/404");
			};
		}
	);
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