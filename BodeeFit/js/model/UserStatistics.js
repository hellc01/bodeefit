
// the model of UserStatistics

!(function (Bodeefit) {
    var workout = Parse.Object.extend('UserStatistics', {

        defaults : {
            
        },
        properties:{
            TYPE: "type",//"Movement" or "TotalTime"
            MOVEMENT: "movement",// Pointer to Movement or null if type=TotalTime
            VALUE: "value"//# of Reps for Movement or Number of seconds for TotalTime
        },
        init : function() {
          
        }
    });

    Bodeefit.Models.Workout = workout;
    console.log("init User Statistics model");

}(window.Bodeefit));
