angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/web/app/modules/subsection/subsection.html',
		};
	})
	.directive('subsection-major', function(){
		return {
			restrict: 'EAC',
			replace: true,
			templateUrl: '/web/app/modules/subsection/subsection-major.html',
		};
	})
	.directive('subsection-minor', function(){
		return {
			restrict: 'EAC',
			replace: true,
			templateUrl: '/web/app/modules/subsection/subsection-minor.html',
		};
	});