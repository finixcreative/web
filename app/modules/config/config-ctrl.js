angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.configure = false;
		if($scope.configure === true){
			$(".hydra").addClass("relative");
			$(".configpanel").removeClass("hide");
			$scope.configLabel = "Done";
		} else if($scope.configure === false){
			$(".hydra").removeClass("relative");
			$(".configpanel").addClass("hide");
			$scope.configLabel = "Edit";
		} else {
			$(".configpanel").addClass("hide");
			$scope.configLabel = "Error";			
		}
		$scope.configPanel = function(){
			console.log('Configure Init = ' + $scope.configure);
			$scope.configure = !$scope.configure;
			if($scope.configure === true){
				$(".hydra").addClass("relative");
				$(".configpanel").removeClass("hide");
				$scope.configLabel = "Done";
			} else if($scope.configure === false){
				$(".hydra").removeClass("relative");
				$(".configpanel").addClass("hide");
				$scope.configLabel = "Edit";
			} else {
				$(".configpanel").addClass("hide");
				$scope.configLabel = "Error";			
			}
			console.log('Configure Update = ' + $scope.configure);
		};
	})
;