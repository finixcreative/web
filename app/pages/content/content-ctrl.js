angular.module('coreMod')
	.controller('ContentController', ['$scope', '$routeParams', 'Content', function ($scope, $routeParams, Content){
		$scope.content = Content.get({pageId: $routeParams.pageId});
	});