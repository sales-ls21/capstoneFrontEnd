"use strict";

app.controller("searchResultsCtrl", function($scope, $location, dataFactory){
	//how does this view know what data to pull?
	
	$scope.remove = (event)=>{
		event.target.parent.remove();
	};
	
});