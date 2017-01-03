"use strict";

app.controller("searchMajorResults", function($scope, $location, setDataFactory, SearchTermData){

	$scope.searchText = SearchTermData;
	$scope.majors = setDataFactory.getMajor();
	console.log($scope.majors);

});