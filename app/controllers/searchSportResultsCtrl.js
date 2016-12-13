"use strict";

app.controller("searchSportResults", function($scope, $location, FBPull, setDataFactory){

	$scope.sports = setDataFactory.getSport();

});