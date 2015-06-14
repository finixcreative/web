angular.module('coreMod')
	.directive('row', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/row/row.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});