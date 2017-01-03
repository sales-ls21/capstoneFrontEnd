"use strict";

app.controller("universitySearchCtrl", function($scope, $location, FBPull, setDataFactory, authFactory){

	$scope.major = "";
	$scope.sport = "";
	$scope.location = "";

	$scope.searchMajor = ()=>{
		FBPull.getUniversityByMajor($scope.major)
		.then((majorArray)=>{
			setDataFactory.setMajor(majorArray);
		});
			$location.url("/searchMajorResults");

	};

	$scope.searchSport = ()=>{
		FBPull.getUniversityBySport($scope.sport)
		.then((sportArray)=>{
			setDataFactory.setSport(sportArray);
		});
			$location.url("/searchSportResults");
	};

	$scope.searchLocation = ()=>{
		FBPull.getUniversityByLocation($scope.location)
		.then((locationArray)=>{
			setDataFactory.setLocation(locationArray);
		});
			$location.url("/searchLocationResults");
	};

	$scope.logout = ()=>{
		authFactory.logoutUser();
		$location.url("/");
	};
	
});