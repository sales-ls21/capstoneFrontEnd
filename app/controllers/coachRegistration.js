"use strict";

app.controller("coachRegistration", function($scope, $location, authFactory, userFactory){

	$scope.coach = {
		name: "Doug Bruno",
		institution:"Depaul",
		address: "Chicago, IL",
		email:"",
		phone:"938505830",
		sport:"basketball",
		password: "",
		userType: "coach",
	};

	$scope.coachRegister = ()=>{
		authFactory.createUser($scope.coach)
		.then(()=>{
			userFactory.storeNewUser($scope.coach)
			.then((storedObj)=>{
				$location.url("/searchAthletes");
			});
		});
	};
	
});