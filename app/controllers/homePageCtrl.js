"use strict";

app.controller("homePageCtrl", function($scope, $timeout){

	$scope.registerStudent = function(){

	};

	$scope.registerCoach = function(){

	};


    let counter = 0,
    i,
    j,
    slides =  $(".mySlides"),
    slidesLen = slides.length - 1;
	let slideshow = ()=>{
        for (i = 0, j = 9999; i < slides.length; i += 1, j -= 1) {
            $(slides[i]).css("z-index", j);
        }
    };

	let startSlideshow= ()=> {
                window.setInterval(function () {
                    if (counter === 0) {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    } else if (counter === slidesLen) {
                        counter = 0;
                        slides.eq(counter).fadeIn(function () {
                            slides.fadeIn();
                        });
                    } else {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    }
                }, 2000);
            };
});