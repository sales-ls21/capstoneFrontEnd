"use strict";

app.controller("athleteDetailsCtrl", function($location, $routeParams, $scope, userFactory){
	
	userFactory.findUserData($routeParams.name)
	.then((obj)=>{
		console.log(obj);
		$scope.athleteObj = obj;
		$scope.$apply();
	});

	$scope.return = ()=>{
		$location.url("/searchAthletes");
	};

});