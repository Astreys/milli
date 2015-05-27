
var app = angular.module('milli', ['ui.bootstrap']);


angular.module('milli').controller('CarouselCtrl', function($scope) {

    $scope.myInterval = 5000;

	$scope.slides = [
		{ image: 'images/slide-01.jpg', text: 'Interior Design'},
		{ image: 'images/slide-02.jpg', text: 'Events'},
		{ image: 'images/slide-03.jpg', text: 'Flowers'}
	];

	//
	new WOW().init();
});