
//the model of CompletedWorkout

!(function (Bodeefit) {
	var completedWorkout = Parse.Object.extend('CompletedWorkout', {

	    properties:{
	        DATE: "date",
	        USER: "user",
	        WORKOUT: "workout",
            RESULTS:"results"
	    },
	    init: function () {

	    }
	});


	Bodeefit.Models.CompletedWorkout = completedWorkout;
	console.log("init completedWorkout model");

}(window.Bodeefit));
