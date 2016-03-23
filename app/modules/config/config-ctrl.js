angular.module("coreMod")
	.controller("ConfigController", ["$scope", "$rootScope", function($scope, $rootScope){
		$rootScope.user = false;
		$rootScope.configure = false;
		$rootScope.userCheck = function(){
			$rootScope.user = !$rootScope.user;
			if($rootScope.user === false){
				$rootScope.configure = false;
			};
		};
		if($rootScope.configure === true){
			$(".hydra").addClass("relative");
			$scope.configLabel = "Done";
		} else if($rootScope.configure === false){
			$(".hydra").removeClass("relative");
			$scope.configLabel = "Edit";
		} else {
			$scope.configLabel = "Error";			
		};
		$scope.configPanel = function(){
			console.log("Configure Init = " + $rootScope.configure);
			$rootScope.configure = !$rootScope.configure;
			if($rootScope.configure === true){
				$(".hydra").addClass("relative");
				$scope.configLabel = "Done";
			} else if($rootScope.configure === false){
				$(".hydra").removeClass("relative");
				$scope.configLabel = "Edit";
			} else {
				$scope.configLabel = "Error";
			}
			console.log("Configure Update = " + $rootScope.configure);
		};
		/* Element cases */
		$scope.configtype = function($scope){
			console.log("* Config Panel *");
			var type = ($scope.contents.config.type);
			if(type === "h1" || type === "h2" || type === "h3" || type === "h4" || type === "h5" || type === "h6"){
				console.log("Config Headline");
				$scope.configtype = "configheadline";
			} else if ($scope.contents.config.type === "p"){
				console.log("Config Text");
				$scope.configtype = "configtext";
			} else if ($scope.contents.config.type === "img"){
				console.log("Config Image");
				$scope.configtype = "configimg";
			} else {
				console.log("Error");
				$scope.configtype = undefined;
			};
		};
	}])
;