angular.module("coreMod")
	.controller("ConfigController", ["$scope", "$rootScope", function($scope, $rootScope){
		$rootScope.user = false;
		$rootScope.configure = false;
		$rootScope.userCheck = function(){
			var guest = {
				"username": "guest",
				"password": "password"
			};
			console.log(
				"User Init = " + $rootScope.user + "\n",
				"Configure Init = " + $rootScope.configure
			);
			function userError(){
				logout();
				alert("Your username was incorrect. Try again!");
				login();
			};
			function pwError(){
				logout();
				alert("Your password was incorrect. Try again!");
				login();
			};
			function restricted(){
				logout();
				alert("Sorry, you don't have access");
			};
			function login(){
				var user = {};
				user.username = prompt("Enter your username:", "Call me Ishmael");
				user.password = prompt("Thank you. Now enter your password:", "moby123");
				if(user.username === guest.username && user.password === guest.password){
					$rootScope.user = !$rootScope.user;
					console.log("Logged in");
				} else if(user.username !== guest.username && user.password === guest.password){
					userError();
					console.log("Username error");
				} else if(user.username === guest.username && user.password !== guest.password){
					pwError();
					console.log("Password error");
				} else if(user.username !== guest.username && user.password !== guest.password){
					restricted();
					console.log("Restricted access");
				}
			};
			function logout(){
				$rootScope.user = false;
				if($rootScope.configure === true){
					$scope.configPanel();
				};
				console.log("Logged out");
			};
			if($rootScope.user !== true){
				login();
			} else {
				logout();
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