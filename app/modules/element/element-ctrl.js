angular.module('coreMod')
	.controller('ElementController', function ($scope){
		$scope = [
			{
				plugin: 'copyright',
				elements: [
					{plugin: 'contact'},
					{plugin: 'social'},
				],
			},
			{
				plugin: 'copyright',
				elements: [
					{plugin: 'contact'},
					{plugin: 'social'},
				],
			},
		];
		$scope.createElement = angular.element('<' + $scope.plugin + '></' + $scope.plugin + '>');
	});