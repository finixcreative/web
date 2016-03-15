var configure = false,
	configPanel;
if(configure === true){
	$(".hydra").addClass("relative");
	$scope.configLabel = "Done";
} else if(configure === false){
	$(".hydra").removeClass("relative");
	$scope.configLabel = "Edit";
} else {
	$scope.configLabel = "Error";			
}
configPanel = function(){
	console.log('Configure Init = ' + configure);
	configure = !configure;
	if(configure === true){
		$(".hydra").addClass("relative");
		$scope.configLabel = "Done";
	} else if(configure === false){
		$(".hydra").removeClass("relative");
		$scope.configLabel = "Edit";
	} else {
		$scope.configLabel = "Error";			
	}
	console.log('Configure Update = ' + configure);
};