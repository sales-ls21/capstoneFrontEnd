"use strict";

app.controller("slideshowCtrl", function($scope, $interval){

	$scope.changeImage = ()=>{
		
	};

	$interval(function(){
		$scope.changeImage();
	}, 2000);
});