
//the model of Movement

!(function (Bodeefit) {
    var movement = Parse.Object.extend('Movement', {

        defaults : {
            
        },
        properies:{
            IMG: "img",
            STATIC_IMG: "staticImg",
            TITLE: "title",
            URL:"url"
        },
        init : function() {
            
        }
    });

    Bodeefit.Models.Movement = movement;
    console.log("init movement model");

}(window.Bodeefit));
