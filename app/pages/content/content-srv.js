angular.module('coreMod')
	.factory('Content', ['$resource', function ($resource){
		return $resource('app/pages/:pageId/content.json', {}, {
			query: {
				method: 'GET',
				params: {
					pageId: 'home'
				},
				isArray: true,
			},
		});
	}]);