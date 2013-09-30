
//the model of Scheduled Workout

!(function (Bodeefit) {
    var scheduledWorkout = Parse.Object.extend('ScheduledWorkout', {

        defaults : {
            
        },
        properties:{
            DATE:"date",//always correct for UTC
            SUBMITTED_DATE:"submittedDate",// not corrected for UTC
            WORKOUT:"workout"//Workout Pointer
        },
        init : function() {

        },
        getActualDate : function() {
            var date = this.get('date');
            var offset = date.getTimezoneOffset();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + offset, date.getSeconds());
        }

    });

    Bodeefit.Models.ScheduledWorkout = scheduledWorkout;
    console.log("init scheduledWorkout model");

}(window.Bodeefit));