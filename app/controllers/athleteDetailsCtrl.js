"use strict";

app.controller("athleteDetailsCtrl", function($routeParams, userFactory, $scope){
	
	userFactory.findUserData($routeParams.name).then((athleteObj)=>{
		$scope.athleteObj = athleteObj;
		$scope.$apply();
	});

});