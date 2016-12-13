"use strict";

app.controller("athleteSearchCtrl", function($scope, $location, $window, FBPull, authFactory, setDataFactory){

	$scope.index = "";
	$scope.input = "";

	$scope.searchAthlete = ()=>{
		FBPull.getAthlete($scope.index, $scope.input)
		.then((obj)=>{
			setDataFactory.setAthletes(obj);
			$location.url("/athleteResults");
			$scope.$apply();
		});
	};

	$scope.logout = ()=>{
		authFactory.logoutUser()
		.then((obj)=>{
			$location.url("/home");
		});
	};
	
});