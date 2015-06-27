angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/pages/content/content.html',
				controller: 'ContentController',
				controllerAs: 'content',
			})
			.when('/:pageId', {
				templateUrl: 'app/pages/content/content.html',
				controller: 'ContentController',
				controllerAs: 'content',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);