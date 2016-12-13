"use strict";

app.controller("searchMajorResults", function($scope, $location, setDataFactory, FBPull){

	$scope.majors = setDataFactory.getMajor();

});