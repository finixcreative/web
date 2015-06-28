angular.module('finixApp')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/:pageId', {
				templateUrl: 'app/pages/content/content.html',
				controller: 'ContentController',
				controllerAs: 'content',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);