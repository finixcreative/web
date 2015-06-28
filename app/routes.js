angular.module('finixApp')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/:pageId', {
				templateUrl: 'http://finixcreative.github.io/web/app/pages/content/content.html',
				controller: 'ContentController',
				controllerAs: 'content',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);