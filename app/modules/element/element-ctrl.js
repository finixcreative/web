angular.module('coreMod')
	.controller('ElementController', function ($scope){
		$scope.createElement = angular.element('<' + $scope.plugin + '></' + $scope.plugin + '>');
	});