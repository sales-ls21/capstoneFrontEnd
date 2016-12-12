"use strict";

app.factory("userFactory", function(FBConfig, $http, $q){

	
	let storeNewUser = function(userObj){
		return new Promise((resolve, reject)=>{
			$http.post(`${FBConfig.databaseURL}/users.json`, angular.toJson(userObj));
			resolve();
		});
	};


	let updateProfile = (user, profileObj, FBConfig)=>{
		return new Promise((resolve, reject)=>{
			$http.patch(`${FBConfig.databaseURL}/users/${user}.json`, angular.toJson(profileObj))
			.success((obj)=>{
				resolve(obj);
			})
			.error((error)=>{
				reject(error);
			});
		});
	};

//this to find all information on athletes to display on page
	let findUserData = (uid)=>{
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/users.json?orderBy="name"&equalTo="${uid}"`)
			.then( (obj)=>{
				resolve(obj);
			})
			.error((error)=>{
				reject(error);
			});
		});
	};

	//is this how to pull the video and photos?

	let getUserMedia = (user)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBConfig.storageBucket}/media/?orderBy="uid"&equalTo="${user}`)
			.then((obj)=>{
				resolve(obj);
			}).error((error)=>{
				reject(error);
			});
		});
	};

	return{storeNewUser, updateProfile, findUserData, getUserMedia};
});