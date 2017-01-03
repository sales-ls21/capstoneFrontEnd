"use strict";

var app = angular.module("pipeline", ["ngParallax", "ngRoute", "angularFileUpload"]);

//will need to set this up to prevent users from seeing info without being logged in
let isAuth = function(authFactory){
	return new Promise ((resolve, reject)=>{
		authFactory.isAuthenticated()
		.then((user)=>{
			if(user){
				resolve();
			} else{
				reject();
			}
		});
	});
};


//this configures the routing for partials and controllers
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/homepage.html",
		controller: "homePageCtrl"
	})
	.when("/student-athleteRegistration", {
		templateUrl: "partials/athleteRegistration.html",
		controller: "athleteRegistration"
	})
	.when("/coach-registration", {
		templateUrl: "partials/coachRegister.html",
		controller: "coachRegistration"
	})
	.when("/createAthleteProfile",{
		templateUrl: "partials/createAthleteProfile.html",
		controller: "createAthleteProfile",
		resolve: {isAuth}
	})
	.when("/login", {
		templateUrl: "partials/login.html",
		controller: "login"
	})
	.when("/profileView", {
		templateUrl: "partials/profileView.html",
		controller: "profileViewCtrl",
		resolve: {isAuth}
	})
	.when("/searchAthletes",{
		templateUrl: "partials/searchAthletes.html",
		controller: "athleteSearchCtrl"
	})
	.when("/uploadMedia", {
		templateUrl: "partials/uploadMedia.html",
		controller: "uploadCtrl"
	})
	.when("/universitySearch",{
		templateUrl: "partials/universitySearch.html",
		controller: "universitySearchCtrl"
	}).
	when("/searchLocationResults", {
		templateUrl: "partials/searchLocationResults.html",
		controller: "searchLocationResultsCtrl"
	})
	.when("/universityDetails/:university", {
		templateUrl: "partials/universityDetails.html",
		controller: "universityDetailCtrl"
	})
	.when("/athleteResults", {
		templateUrl: "partials/athleteSearchResults.html",
		controller: "athleteResultsCtrl"
	})
	.when("/athleteSearchResults/:name", {
		templateUrl: "partials/athleteDetails.html",
		controller: "athleteDetailsCtrl"
	})
	.when("/searchMajorResults", {
		templateUrl: "partials/searchMajorResults.html",
		controller: "searchMajorResults"
	})
	.when("/searchSportResults", {
		templateUrl: "partials/searchSportResults.html",
		controller: "searchSportResults"
	})
	.otherwise("/");
}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});

app.run( ($location, FBConfig)=>{
	let authConfig = {
		apiKey: FBConfig.apiKey,
		authDomain: FBConfig.authDomain
	};
	firebase.initializeApp(authConfig);
});