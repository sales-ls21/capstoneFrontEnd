"use strict";

app.factory("userFactory", function(FBConfig, $http, $q){

	
	let storeNewUser = function(userObj){
		return new Promise((resolve, reject)=>{
			$http.post(`${FBConfig.databaseURL}/users.json`, angular.toJson(userObj));
			resolve();
		});
	};


	let updateProfile = (user, profileObj)=>{
		return new Promise((resolve, reject)=>{
			$http.patch(`${FBConfig.databaseURL}/users/${user}.json`, angular.toJson(profileObj));
			resolve();
		});
	};

//this to find all information on athletes to display on page
	let findUserData = (uid)=>{
		console.log("passed to findUserData", uid);
		return new Promise( (resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/users.json?orderBy="name"&equalTo="${uid}"`)
			.then( (obj)=>{
				console.log("returned from findUserData", obj.data);
				resolve(obj.data);
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

	let getSingleUser = (currentUser)=>{
		console.log("passed", currentUser);
		return new Promise((resolve, reject)=>{
			$http.get(`${FBConfig.databaseURL}/users.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then((data)=>{
				console.log("returned", data.data);
			resolve(data.data);				
			});
		});
	};

	return{storeNewUser, updateProfile, findUserData, getUserMedia, getSingleUser};
});