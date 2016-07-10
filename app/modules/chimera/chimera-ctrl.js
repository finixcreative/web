/*
CHIMERA | Shapeshifter module accepts dynamic route parameter to fetch page content data.
© 2015-2016 Finix, all rights reserved.
*/
angular.module('chimeraMod')
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
		var chimera, pageData;
		chimera = $routeParams.chimera;
		pageData = 'app/contents/'+chimera+'.json';
		$scope.template = 'app/modules/hydra/hydra.html';
		$scope.contents = [];
		$scope.errors = [];
		$scope.edit = false;
		$http.get(pageData).then(
			function success(response){
				$scope.contents = response.data;
			},
			function error(response){
				$scope.contents = response.data;
				$scope.errors = response.error;
				console.log(
					"Chimera: " + chimera + "\n",
					"Page URL: " + pageData + "\n",
					"Template URL: " + $scope.template + "\n",
					"Contents: " + $scope.contents[0].contents + "\n",
					"Errors: " + $scope.errors
				);
				if($scope.errors == undefined){
					$location.url("/404");
				};
			}
		);
		$scope.addRow = function(row, placement){
			var newIndex = function(){
				if(placement === "top"){
					return row.$parent.$parent.$index;
				} else if(placement === "bottom"){
					return (row.$parent.$parent.$index + 1);
				}				
			};
			row.$parent.$parent.$parent.contents.splice(newIndex(), 0, {
				"config": {
					"type": "row",
					"class": {
						"inner": "pad-40-20"
					},
					"bg": {
						"color": "#fff",
						"opacity": 0,
						"parallax": null
					}
				},
				"contents": [
					{
						"config": {
							"type": "h1",
							"text": "Add headline"
						},
						"contents": []
					},
					{
						"config": {
							"type": "p",
							"text": "Add content"
						},
						"contents": []
					}
				]
			});
			row.$parent.$parent.$parent.contents.join();
		};
		/*
		$scope.addComponent = function(location, type, placement){
			var newIndex = function(){
				if(placement === "top"){
					return location.$parent.$index;
				} else if(placement === "bottom"){
					return (location.$parent.$index + 1);
				}				
			};
			location.$parent.$parent.contents.splice(newIndex(), 0, {"config": {"type": type}, "contents": []});
			row.$parent.$parent.$parent.contents.join();
		};
		*/
		/* Post method
		$http.post(pageData).then(
			function success(response){
				$scope.contents = response.data;
			},
			function error(response){
				$scope.contents = response.data;
				$scope.errors = response.error;
			}
		);
		*/
		/* Element cases
		function getConfig($scope){
			var configtype;
			for(var i = 0; i < $scope.contents.length; i++){
				console.log($scope.contents[i].config.type);
				if(
					$scope.contents[i].config.type === "h1" ||
					$scope.contents[i].config.type === "h2" ||
					$scope.contents[i].config.type === "h3" ||
					$scope.contents[i].config.type === "h4" ||
					$scope.contents[i].config.type === "h5" ||
					$scope.contents[i].config.type === "h6"
				){
					console.log("Config Headline");
					configtype = "configheadline";
				} else if($scope.contents[index].config.type === "p"){
					console.log("Config Text");
					configtype = "configtext";
				} else if($scope.contents[index].config.type === "img"){
					console.log("Config Image");
					configtype = "configimg";
				} else {
					console.log("Error. Config type for " + $scope.contents[i].config.type + " is not defined");
					configtype = "wompwomp";
				}
			}
			console.log("Config Type: " + configtype);
			return configtype;
		};
		$scope.configtype = getConfig();
		*/
	}])
;