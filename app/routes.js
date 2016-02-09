angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/:chimera', {
				templateUrl: 'app/modules/chimera/chimera.html',
				controller: 'ChimeraController',
				controllerAs: 'chimera'
			})
			.otherwise({
				redirectTo: '/home',
			});
	}])
;