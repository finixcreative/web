angular.module('coreMod')
	.directive('config', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/config.html',
			controller: 'ChimeraController',
			controllerAs: 'chimera'
		};
	})
	.directive('configtext', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configtext.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('writetext', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/writetext.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('configheadline', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configheadline.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('writeheadline', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/writeheadline.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('configimg', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configimg.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('imgselect', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/imgselect.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('size', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/size.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('textsize', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/textsize.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
;