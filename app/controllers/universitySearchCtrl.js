"use strict";

app.controller("universitySearchCtrl", function($scope, $location, dataFactory){

	$scope.major = "";
	$scope.sport = "";
	$scope.location = "";

	$scope.searchMajor = ()=>{
		dataFactory.getUniversityByMajor($scope.major)
		.then((majorArray)=>{
			$location.url("/searchResults");
		});

	};

	$scope.searchSport = ()=>{
		dataFactory.getUniversityBySport($scope.sport)
		.then((sportArray)=>{
			$location.url("/searchResults");
		});
	};

	$scope.searchLocation = ()=>{
		dataFactory.getUniversityByLocation($scope.location)
		.then((locationArray)=>{
			$location.url("/searchResults");
		});

	};
	
});