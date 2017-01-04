"use strict";

app.controller("athleteResultsCtrl", function($scope, $location, setDataFactory){
	
	var results = setDataFactory.getAthletes();
	$scope.displayResults = results;

});


