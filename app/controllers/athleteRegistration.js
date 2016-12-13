"use strict";

app.controller("athleteRegistration", function($scope, userFactory, authFactory, $location){

	$scope.athlete = {
		name: "",
		age: "",
		birthdate:"",
		email: "",
		gender:"",
		grade:"",
		sport:"",
		state:"",
		major:"",
		userType: "athlete"
	};

	$scope.studentRegister = ()=>{
		console.log($scope.athlete.email, $scope.athlete.password);
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