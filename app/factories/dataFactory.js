"use strict";

app.factory("FBPull", (FBConfig, $http)=>{


	let loadUniversities = ()=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json`)
			.success((obj)=>{
				resolve(obj);
			}).error((error)=>{
				reject(error);
			});
		});
	};

	let getUniversityByMajor = (major)=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="${major}"`)
			.then((obj)=>{
				console.log(obj.data);
				resolve(obj.data);
			});
		});

	};

	let getUniversityBySport = (sport)=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="${sport}"`)
			.then((obj)=>{
				console.log(obj.data);
				resolve(obj.data);
			});
		});
	};

	let getUniversityByLocation = (location)=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="State"&equalTo="${location}"`)
			.then((obj)=>{
				console.log(obj.data);
				resolve(obj.data);
			});
		});
	};

	let getSpecificUniversity = (university)=>{
		console.log(university);
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="University"&equalTo="${university}"`)
			.then((obj)=>{
				console.log(obj.data);
				resolve(obj.data);
			});
		});
	};


	let getAthlete = (index, input)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/users.json?orderBy="${index}"&equalTo="${input}"`)
			.then((obj)=>{
				resolve(obj);
			});
		});
	};
	return{loadUniversities, getUniversityByLocation, getUniversityBySport, getUniversityByMajor, getAthlete, getSpecificUniversity};
});

