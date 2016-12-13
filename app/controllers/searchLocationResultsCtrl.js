"use strict";

app.controller("searchLocationResultsCtrl", function($scope, $location, setDataFactory){
	//how does this view know what data to pull?
	$scope.location= setDataFactory.getLocation();
	$scope.remove = (event)=>{
		event.target.parent.remove();
	};
	
});