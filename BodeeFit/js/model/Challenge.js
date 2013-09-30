
//the model of Challenge

!(function (Bodeefit) {
    var workout = Parse.Object.extend('Challenge', {

        defaults : {
            
        },
        properties:{
            FROM_USER: "fromUser",// User Pointer
            FROM_USER_RESULTS: "fromUserResults",// WorkoutResults Pointer
            TO_USER:"toUser",// User Pointer
            TO_USER_RESULTS:"toUserResults",// WorkoutResults Pointer
            ACHEDULED_WORKOUT:"acheduledWorkout",// ScheduledWorkout pointer
            ACCEPTED: "accepted",//Boolean
            REPLIED:"replied"//Boolean
        },
        init : function() {
          
        }
    });

    Bodeefit.Models.Workout = workout;
    console.log("init Challenge model");

}(window.Bodeefit));
