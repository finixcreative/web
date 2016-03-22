angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$rootScope.configure = false;
		if($rootScope.configure === true){
			$(".hydra").addClass("relative");
			$(".configpanel").removeClass("stealth");
			$scope.configLabel = "Done";
		} else if($rootScope.configure === false){
			$(".hydra").removeClass("relative");
			$(".configpanel").addClass("stealth");
			$scope.configLabel = "Edit";
		} else {
			$(".configpanel").addClass("stealth");
			$scope.configLabel = "Error";			
		}
		$scope.configPanel = function(){
			console.log('Configure Init = ' + $rootScope.configure);
			$rootScope.configure = !$rootScope.configure;
			if($rootScope.configure === true){
				$(".hydra").addClass("relative");
				$(".configpanel").removeClass("stealth");
				$scope.configLabel = "Done";
			} else if($rootScope.configure === false){
				$(".hydra").removeClass("relative");
				$(".configpanel").addClass("stealth");
				$scope.configLabel = "Edit";
			} else {
				$(".configpanel").addClass("stealth");
				$scope.configLabel = "Error";
			}
			console.log('Configure Update = ' + $rootScope.configure);
		};
		/* Element cases */
		$scope.configtype = function($scope){
			console.log("* Config Panel *");
			if($scope.contents.config.type === "h1" || "h2" || "h3" || "h4" || "h5" || "h6"){
				console.log("Config Headline");
				return "configheadline";
			} else if ($scope.contents.config.type == "p"){
				console.log("Config Text");
				return "configtext";
			} else if ($scope.contents.config.type == "img"){
				console.log("Config Image");
				return "configimg";
			} else {
				console.log("Null Config");
				return null;
			};
		};
	})
;