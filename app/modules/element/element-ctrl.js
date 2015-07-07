angular.module('coreMod')
	.controller('ElementController', function ($scope){
		$scope.plugin = '=';
		$scope.createElement = angular.element('<' + $scope.plugin + '></' + $scope.plugin + '>');
	});