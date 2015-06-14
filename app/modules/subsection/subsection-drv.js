angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'EAC',
			templateUrl: '/web/app/modules/subsection/subsection.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});