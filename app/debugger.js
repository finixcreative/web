angular.module('finixApp')
	.config(['$compileProvider', function($compileProvider){
		$compileProvider.debugInfoEnabled(false);
	}])
;