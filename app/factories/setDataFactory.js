"use strict";

app.factory("setDataFactory", function($location){
	let athletes;
	let selectedAthlete;
	let major = [];
	let sport = [];
	let location = [];
	
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
		major = Object.values(searchedMajor);
		console.log(major);
	};

	let setSport = (searchedSport)=>{
		sport = Object.values(searchedSport);
		console.log(sport);
	};

	let setLocation = (searchedLocation)=>{
		location = Object.values(searchedLocation);
		// location = searchedLocation;
		console.log(location);
	};

	let getLocation = ()=>{
		console.log(location);
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