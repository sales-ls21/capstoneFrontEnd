"use strict";

app.controller("searchSportResults", function($scope, setDataFactory, SearchTermData){
	$scope.searchText = SearchTermData;
	$scope.sports = setDataFactory.getSport();

});