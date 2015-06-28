angular.module('coreMod')
	.directive('fxheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/header/header.html'
		};
	});