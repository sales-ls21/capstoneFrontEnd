"use strict";

app.controller("universityDetailCtrl", function($scope, dataFactory, $routeParams){

	dataFactory.getSpecificUniversity($routeParams.university)
	.then((obj)=>{
		$scope.selectedItem = obj;
		$scope.$apply();
	});
});

