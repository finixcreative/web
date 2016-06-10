angular.module('coreMod', [])
	.directive('business-hours', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/modules/business-hours/business-hours.html',
			controller: 'BusinessHoursController'
		};
	})
;