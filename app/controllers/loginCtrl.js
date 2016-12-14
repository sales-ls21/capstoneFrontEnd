"use strict";

app.controller("login", function($scope, $location, authFactory, userFactory){

	var newObj;

	$scope.user = {
		email: "",
		password: ""
	};

	$scope.login = ()=>{
		console.log($scope.user);
		authFactory.loginUser($scope.user).then((obj)=>{
			userFactory.getSingleUser(obj.uid)
			.then( (obj)=>{
				for(var prop in obj){
					newObj = obj[prop];
				}
			if(newObj.userType === "athlete"){
				$location.url("/profileView");
				$scope.$apply();
			} else if(newObj.userType === "coach"){
				$location.url("/searchAthletes");
				$scope.$apply();
			}	
			});
		});
	};

	$scope.home = ()=>{
		$location.url("/");
	};
});