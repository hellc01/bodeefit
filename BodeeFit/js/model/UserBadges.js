
//the model of UserBadges

!(function (Bodeefit) {
    var workout = Parse.Object.extend('UserBadges', {

        defaults : {
            
        },
        properties:{
            USER: "user",//User
            BADGE: "badge"// Badge
        },
        init : function() {
          
        }
    });

    Bodeefit.Models.Workout = workout;
    console.log("init UserBadges model");

}(window.Bodeefit));
