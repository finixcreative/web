/*
HYDRA | Replicating module generates dynamic elements based on page content data.
© 2015 Finix, all rights reserved.
*/
angular.module('hydraMod')
	.controller('HydraController', function($scope){
		$scope.hydra = 'app/modules/hydra/hydra.html';
		$scope.module = 'app/modules/' + content.config.type + '/' + content.config.type + '.html';
		$scope.edit = false;
		/*
		$scope.saveChanges = function(){
			var data = $.param({
				json: JSON.stringify({
					name: $scope.newName
				})
			});
			$http.post("/echo/json/", data).success(function(data, status) {
				$scope.hello = data;
			})
		};
		*/
	})
;