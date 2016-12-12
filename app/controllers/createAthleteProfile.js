"use strict";

app.controller("createAthleteProfile", function($scope, userFactory, $location, authFactory){

	let user = authFactory.getUser();
	let profileInfo = {

	};

//function saves updated info and returns user to same page
	$scope.saveNewInfo = (user, profileInfo)=>{
		userFactory.updateProfile(user, profileInfo)
		.then((obj)=>{
			$location.url("/createAthleteProfile");
		});
	};


//function saves updated info and takes user to upload page
	$scope.saveAndGo = (user, profileInfo)=>{
		userFactory.updateProfile(user, profileInfo)
		.then((obj)=>{
			$location.url("/uploadMedia");
		});
	};

});