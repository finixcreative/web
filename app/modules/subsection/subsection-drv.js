angular.module('coreMod')
	.directive('subsection-major', function(){
		return {
			restrict: 'EAC',
			templateUrl: '/web/app/modules/subsection/subsection-major.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	})
	.directive('subsection-minor', function(){
		return {
			restrict: 'EAC',
			templateUrl: '/web/app/modules/subsection/subsection-minor.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});