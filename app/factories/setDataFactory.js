"use strict";

app.factory("setDataFactory", function($location){
	let athletes;
	let selectedAthlete;
	
	let setAthletes = (searchedAthlete)=>{
		athletes = searchedAthlete.data;
	};

	let getAthletes = ()=>{
		return athletes;
	};

	let setSingleAthlete = (foundAthlete)=>{
		console.log(foundAthlete);
		selectedAthlete = foundAthlete;
	};

	let getSingleAthlete = ()=>{
		return selectedAthlete;
	};

	return{setAthletes, getAthletes, setSingleAthlete, getSingleAthlete};
});