angular.module('coreMod')
	.controller('ElementController', function ($scope){
		$scope.plugin = 'copyright';
		$scope.createElement = angular.element('<' + $scope.plugin + '></' + $scope.plugin + '>');
	});