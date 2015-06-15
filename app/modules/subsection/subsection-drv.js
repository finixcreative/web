angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/web/app/modules/subsection/subsection.html',
		};
	})
	.directive('subsectionMajor', function(){
		return {
			restrict: 'EAC',
			replace: false,
			templateUrl: '/web/app/modules/subsection/subsection-major.html',
		};
	})
	.directive('subsectionMinor', function(){
		return {
			restrict: 'EAC',
			replace: false,
			templateUrl: '/web/app/modules/subsection/subsection-minor.html',
		};
	});