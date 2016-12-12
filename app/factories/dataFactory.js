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
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="${major}"&equalTo="true"`)
			.then((obj)=>{
				resolve(obj);
			}).error((error)=>{
				reject(error);
			});
		});

	};

	let getUniversityBySport = (sport)=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="${sport}"&equalTo="true"`)
			.then((obj)=>{
				resolve(obj);
			}).error((error)=>{
				reject(error);
			});
		});
	};

	let getUniversityByLocation = (location)=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="${location}"&equalTo="true"`)
			.then((obj)=>{
				resolve(obj);
			}).error((error)=>{
				reject(error);
			});
		});
	};

	let getSpecificUniversity = (university)=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/universities.json?orderBy="university"&equalTo="${university}"`)
			.then((obj)=>{
				resolve(obj);
			}).error((error)=>{
				reject(error);
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
	return{loadUniversities, getUniversityByLocation, getUniversityBySport, getUniversityByMajor, getAthlete};
});

