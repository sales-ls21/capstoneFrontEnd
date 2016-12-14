"use strict";

app.controller("athleteRegistration", function($scope, userFactory, authFactory, $location){

	$scope.athlete = {
		name: "Diana Taurasi",
		age: "16",
		birthdate:"08/17/2000",
		email: "deeitaly@gmail.com",
		gender:"female",
		grade:"junior",
		sport:"basketball",
		state:"CA",
		major:"communications",
		userType: "athlete"
	};

	$scope.studentRegister = ()=>{
		authFactory.createUser($scope.athlete)
		.then((newUser)=>{
			$scope.athlete.uid = newUser.uid;
			userFactory.storeNewUser($scope.athlete)
		.then(()=>{
			$location.url("/createAthleteProfile");
			});
		});	
	};

});