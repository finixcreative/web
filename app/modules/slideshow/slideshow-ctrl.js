angular.module('coreMod')
	.controller('SlideshowController', function($scope, elem, attrs){
		var timer,
			slideChange;
		$scope.slides = images;
		$scope.prev = function(){
			div.setAttribute('data-slide', 'prev')
		};
		$scope.next = function(){
			div.setAttribute('data-slide', 'next')
		};
		$scope.currentIndex = 0;
		$scope.next = function(){
			$scope.currentIndex < $scope.contents.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
		};
		$scope.prev = function(){
			$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
		};
		scope.$watch('currentIndex', function(){
			scope.images.forEach(function(image){
				image.visible = false;
			});
			scope.images[scope.currentIndex].visible = true;
		});
		slideChange = function(){
			timer = $timeout(function(){
				scope.next();
				timer = $timeout(sliderFunc, 6000);
			}, 6000);
		};
		slideChange();
		scope.$on('$destroy', function(){
			$timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
		});
	})
;