"use strict";

app.controller("searchLocationResultsCtrl", function($scope, $location, setDataFactory, SearchTermData){
	//how does this view know what data to pull?
	$scope.searchText = SearchTermData;
	$scope.location= setDataFactory.getLocation();
	
	$scope.remove = (event)=>{
		event.target.parent.remove();
	};
	
});