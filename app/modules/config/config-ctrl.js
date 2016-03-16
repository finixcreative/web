angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.configure = true;
		if($scope.configure === true){
			$(".hydra").addClass("relative");
			$(".configpanel").removeClass("stealth");
			$scope.configLabel = "Done";
		} else if($scope.configure === false){
			$(".hydra").removeClass("relative");
			$(".configpanel").addClass("stealth");
			$scope.configLabel = "Edit";
		} else {
			$(".configpanel").addClass("stealth");
			$scope.configLabel = "Error";			
		}
		$scope.configPanel = function(){
			console.log('Configure Init = ' + $scope.configure);
			$scope.configure = !$scope.configure;
			if($scope.configure === true){
				$(".hydra").addClass("relative");
				$(".configpanel").removeClass("stealth");
				$scope.configLabel = "Done";
			} else if($scope.configure === false){
				$(".hydra").removeClass("relative");
				$(".configpanel").addClass("stealth");
				$scope.configLabel = "Edit";
			} else {
				$(".configpanel").addClass("stealth");
				$scope.configLabel = "Error";
			}
			console.log('Configure Update = ' + $scope.configure);
		};
	})
;