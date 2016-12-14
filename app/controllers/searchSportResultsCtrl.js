"use strict";

app.controller("searchSportResults", function($scope, setDataFactory){

	$scope.sports = setDataFactory.getSport();

});