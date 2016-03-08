angular.module('coreMod')
	.controller('ResourceController', ['$http', '$scope', '$sce', function($http, $scope, $sce){ 
		$scope.config.trustedsrc = $sce.trustAsResourceUrl($scope.config.src);
	}])
;