"use strict";

app.controller("universityDetailCtrl", function($scope, FBPull, $routeParams){

	FBPull.getSpecificUniversity($routeParams.university)
	.then((obj)=>{
		$scope.selectedItem = obj;
		$scope.$apply();
	});
});

