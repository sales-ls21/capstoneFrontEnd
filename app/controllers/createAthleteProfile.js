"use strict";

app.controller("createAthleteProfile", function($scope, userFactory, $location, authFactory){
	let user = authFactory.getUser();
	
	$scope.profileInfo = {

		height:"5'9",
		weight: "140",
		position:"outfielder",
		varsity: "1",
		jersey: "3",
		stats: ".39 BA, 20RBIs, 10SB, 15HRs",
		awards: "Freshman of the Year, All State Second Team, All Freshman First Team, Varsity Letter",
		gpa: "3.2",
		academic: "Principal's List",
		schoolname: "Birchfield",
		schoollocation: "Birchfield, MS",
		coachname: "Larry Anderson",
		coachemail: "anderson@birchfield.com",
		teamrecord:"13-2",
		teamwards: "state runners-up",

	};

//function saves updated info and returns user to same page
	$scope.saveNewInfo = ()=>{
		userFactory.getSingleUser(user)
		.then((obj)=>{
			var items = Object.keys(obj);
			obj.userId = items[0];			
		userFactory.updateProfile(obj.userId, $scope.profileInfo)
		.then((obj)=>{
			$location.url("/createAthleteProfile");	
			});
		});
	};


//function saves updated info and takes user to upload page
	$scope.saveAndGo = ()=>{
		userFactory.getSingleUser(user)
		.then((obj)=>{
			var items = Object.keys(obj);
			obj.userId = items[0];	
		userFactory.updateProfile(user, $scope.profileInfo)
		.then((obj)=>{
			$location.url("/uploadMedia");
		});
	});
};
});