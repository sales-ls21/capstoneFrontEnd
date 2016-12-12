"use strict";

app.controller("profileViewCtrl", function($scope, $location, userFactory, authFactory){


//how do I get the user info to know which one to display?
$scope.user = authFactory.getUser();

userFactory.findUserData($scope.user).then((athleteArray)=>{
	$scope.athletes = athleteArray;
	$scope.$apply();//do I need this?
});

userFactory.getUserMedia($scope.user).then((mediaArray)=>{
	$scope.media = mediaArray;
	$scope.$apply();
});

$scope.logOut = ()=>{
	authFactory.logoutUser().then((obj)=>{
		$location.url("/home");
	});
};

});