angular.module('coreMod')
	.controller('ResourceController', ['$http', '$scope', '$sce', function($http, $scope, $sce){
		for (var i = 0; i < $scope.contents.length; i++) {
			var config = $scope.contents[i].config;
			config.trustedsrc = $sce.trustAsResourceUrl(config.src);
		}
	}])
;