angular.module('coreMod')
	.directive('fxfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/footer/footer.html'
		};
	});