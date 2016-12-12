"use strict";

var app = angular.module("pipeline", ["ngRoute", "angularFileUpload"]);

//will need to set this up to prevent users from seeing info without being logged in
let authorization;


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
		controller: "createAthleteProfile"
	})
	.when("/login", {
		templateUrl: "partials/login.html",
		controller: "login"
	})
	.when("/profileView", {
		templateUrl: "partials/profileView.html",
		controller: "profileViewCtrl"
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
	when("/searchResults", {
		templateUrl: "partials/searchResults.html",
		controller: "searchResultsCtrl"
	})
	.when("/universityDetails/:university", {
		templateUrl: "partials/universityDetails.html",
		controller: "universityDetailCtrl"
	})
	.when("/athleteResults", {
		templateUrl: "partials/athleteSearchResults.html",
		controller: "athleteResultsCtrl"
	})
	.when("/athleteDetails/:name", {
		templateUrl: "partials/athleteDetails.html",
		controller: "athleteDetailsCtrl"
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