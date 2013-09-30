
//the model of Devices

!(function (Bodeefit) {
    var workout = Parse.Object.extend('Devices', {

        defaults : {
            
        },
        properties:{
            APP_TYPE: "appType",//Windows 8
            CHANNEL_URI: "channelURI"//Windows 8 Channel URI for sending Push
        },
        init : function() {
          
        }
    });

    Bodeefit.Models.Workout = workout;
    console.log("init Devices model");

}(window.Bodeefit));
