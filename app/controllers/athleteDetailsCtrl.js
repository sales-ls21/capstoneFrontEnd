"use strict";

app.controller("athleteDetailsCtrl", function($routeParams, userFactory, $scope){
	
	userFactory.findUserData($routeParams.name).then((athleteObj)=>{
		//CONSOLE.LOG here to find out what happened. 
		$scope.athleteObj = athleteObj;
		$scope.$apply();
	});

});