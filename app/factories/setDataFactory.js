"use strict";

app.factory("setDataFactory", function($location){
	let athletes;
	let selectedAthlete;
	let major;
	let sport;
	let location;
	
	let setAthletes = (searchedAthlete)=>{
		athletes = searchedAthlete.data;
	};

	let getAthletes = ()=>{
		return athletes;
	};

	let setSingleAthlete = (foundAthlete)=>{
		selectedAthlete = foundAthlete;
	};

	let getSingleAthlete = ()=>{
		return selectedAthlete;
	};

	let setMajor = (searchedMajor)=>{
		major = searchedMajor;
	};

	let setSport = (searchedSport)=>{
		sport = searchedSport;
	};

	let setLocation = (searchedLocation)=>{
		location = searchedLocation;
	};

	let getLocation = ()=>{
		return location;
	};

	let getSport = ()=>{
		return sport;
	};

	let getMajor = ()=>{
		return major;
	};

	return{setAthletes, getAthletes, setSingleAthlete, getSingleAthlete, setMajor, setSport, setLocation, getMajor, getSport, getLocation};
});