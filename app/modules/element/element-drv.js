angular.module('coreMod')
	.directive('element', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/web/app/modules/element/element.html',
		};
	});