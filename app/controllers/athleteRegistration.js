"use strict";

app.controller("athleteRegistration", function($scope, userFactory, authFactory, $window){

	$scope.athlete = {
		name: "",
		age: "",
		birthdate:"",
		email: "",
		password: "",
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
		.then(()=>{
			userFactory.storeNewUser($scope.athlete)
		.then(()=>{
			console.log("here");
			$window.location.href = "/createAthleteProfile";
			$scope.$apply();
			});
		});	
	};

});