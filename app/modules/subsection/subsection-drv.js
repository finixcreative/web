angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'EAC',
			replace: false,
			templateUrl: function(elem, attr){
				return '/web/app/modules/subsection/'+attr.template+'.html';
			}
		};
	});