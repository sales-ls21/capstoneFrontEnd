"use strict";

app.factory("setDataFactory", function($location){
	let athletes;
	
	let setAthletes = (searchedAthlete)=>{
		athletes = searchedAthlete.data;
	};

	let getAthletes = ()=>{
		return athletes;
	};
	return{setAthletes, getAthletes};
});