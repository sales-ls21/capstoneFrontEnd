"use strict";

app.controller("universityDetailCtrl", function($scope, FBPull, $routeParams){

	FBPull.getSpecificUniversity($routeParams.university)
	.then((obj)=>{
		$scope.selectedItem = obj;
		console.log(obj);
		$scope.$apply();
	});
});

