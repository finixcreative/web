angular.module("coreMod")
	.controller("ConfigController", ["$scope", "$rootScope", function($scope, $rootScope){
		var guest = {
			"username": "guest",
			"password": "password"
		};
		$rootScope.user = false;
		$rootScope.configure = false;
		$rootScope.userCheck = function(){
			console.log(
				"User Init = " + $rootScope.user + "\n",
				"Configure Init = " + $rootScope.configure
			);
			$rootScope.user = !$rootScope.user;
			function userError(){
				alert("Your username was incorrect. Try again!");
				login();
			};
			function pwError(){
				alert("Your password was incorrect. Try again!");
				login();
			};
			function restricted(){
				alert("Sorry, you don't have access");
			};
			function login(){
				// return login popup
				user.username = prompt("Enter your username:", "Call me Ishmael");
				user.password = prompt("Thank you. Now enter your password:", "moby123");
				if(user.username === guest.username && user.password === guest.password){
					$scope.configPanel();
				} else if(user.username !=== guest.username && user.password === guest.password){
					userError();
				} else if(user.username === guest.username && user.password !=== guest.password){
					pwError();
				} else if(user.username !=== guest.username && user.password !=== guest.password){
					restricted();
				}
			};
			if($rootScope.user === false){
				login();
			};
			console.log(
				"User Update = " + $rootScope.user + "\n",
				"Configure Update = " + $rootScope.configure
			);
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