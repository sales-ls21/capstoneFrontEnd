"use strict";

app.controller("coachRegistration", function($scope, $location, authFactory, userFactory){

	$scope.coach = {
		name: "Doug Bruno",
		institution:"Depaul",
		address: "Chicago, IL",
		email:"",
		password:"password1234",
		phone:"938505830",
		sport:"basketball",
		userType: "coach",
	};

	$scope.coachRegister = ()=>{
		authFactory.createUser($scope.coach)
		.then(()=>{
			// $scope.coach.password = "null";
			userFactory.storeNewUser($scope.coach)
			.then((storedObj)=>{
				$location.url("/searchAthletes");
			});
		});
	};
	
});