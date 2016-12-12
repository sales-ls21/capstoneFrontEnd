"use strict";

app.controller("athleteResultsCtrl", function($scope, $location, setDataFactory){
	
	var results = setDataFactory.getAthletes();
	for (var prop in results){
		var displayResults = results[prop];
	}
	console.log(displayResults);

	

});