angular.module('coreMod')
	.directive('element', ['$scope', '$compile', function ($scope, $compile){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				plugin: '=',
			},
			compile: function (scope, element){
				var template = angular.element('<' + scope.plugin + '></' + scope.plugin + '>');
				template.append(element.contents());
				element.replaceWith(template);
			},
			/*templateUrl: 'http://finixcreative.github.io/web/app/modules/element/element.html',*/
		};
	}]);