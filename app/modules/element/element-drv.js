angular.module('coreMod')
	.directive('element', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'http://finixcreative.github.io/web/app/modules/element/element.html',
		};
	});