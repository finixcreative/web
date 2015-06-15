angular.module('coreMod')
	.directive('row', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/web/app/modules/row/row.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});