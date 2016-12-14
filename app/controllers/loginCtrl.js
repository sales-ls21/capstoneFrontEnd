"use strict";

app.controller("login", function($scope, $location, authFactory, userFactory){

	$scope.user = {
		email: "",
		password: ""
	};

	$scope.login = ()=>{
		console.log($scope.user);
		authFactory.loginUser($scope.user).then((obj)=>{
			userFactory.findUserData(obj.uid)
			.then( (obj)=>{
			if(obj.userType === "athlete"){
				$location.url("/profileView");
			} else{
				$location.url("/searchAthletes");
			}	
			});
		});
	};
});