angular.module('coreMod')
	.directive('element', function ($compile){
		return {
			restrict: 'E',
			replace: true,
			template: '<div>New element</div>',
			controller: 'ElementController',
			link: function (scope, element, attrs){
				var compileElement = $compile(scope.createElement);
				var content = compileElement(scope);
				attrs.$observe('plugin', function (value){
					if (value) {
						element.append(content);
					}
				});
			},
		};
	});