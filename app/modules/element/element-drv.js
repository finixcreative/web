angular.module('coreMod')
	.directive('element', function ($compile){
		return {
			restrict: 'E',
			replace: true,
			template: '<div>New element</div>',
			/*templateUrl: 'http://finixcreative.github.io/web/app/modules/element/element.html',*/
			controller: 'ElementController',
			scope: {
				plugin: '=',
			},
			link: function (scope, element, attrs){
				var compileElement = $compile(scope.createElement);
				var content = compileElement(scope);
				element.append(content);
			},
		};
	}]);