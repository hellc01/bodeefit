window.Bodeefit = {
	initConfig : {
		environment : 'dev'
	},
	isDev : function isDev() {
	    if (Bodeefit.config.environment && Bodeefit.initConfig.environment.indexOf('dev') > -1) {
			return true;
		}
		return false;
	},
	init: function () {
	    console.log("app init");
		var config = this.getConfig();
		Parse.initialize(config.parseAppId, config.parseJSKey);
		//Parse.history.start({pushState: false});
		//this.activeCollections.scheduledWorkouts.getTodaysWorkout();
	},
	getConfig : function getConfig(configName) {
		if (!configName) {
			if (Bodeefit.isDev()) {
				configName = "development";
			}
			else {
				configName = "production";
			}
		}
		return this.enviromentConfigs[configName];
	},
	enviromentConfigs : {
		production : {
			websiteURL : 'https://bodeefit.com',
			parseAppId: '7LFTNtCElIjZChyxghgOtgXcIB2k2zlpN0Cq5J5X',
			parseJSKey: 'hVKkjXUpL7RehKzDmbwKDMXpt28cHOqevHNXNVMp',
			stripePublishableKey : 'pk_live_XzThAT0T9Q9Sws9KddD8zW2H',
			bodeefuelPlanId : 'Joo3IjyqnX'
		},
		development : {
			websiteURL : 'https://dev.bodeefit.com',
			parseAppId: '7LFTNtCElIjZChyxghgOtgXcIB2k2zlpN0Cq5J5X',
			parseJSKey: 'hVKkjXUpL7RehKzDmbwKDMXpt28cHOqevHNXNVMp',
			stripePublishableKey : 'pk_test_tXwVXLHd0bmWIQHw4c8pLQqB',
			bodeefuelPlanId : 'C7wtAkA0r8'
		}
	},
	config: {},
	initialize : function() {}, //the only call needed to set up the app
	Collections : {}, //All the uninstantiated Backbone Collections the app might need
	activeCollections : {}, //Any active, instantiated Backbone Collections are stored here
	Models : {}, //All the uninstantiated Backbone Models the app might need
	activeModels : {}, // Any active instantiated Backbone Models are stored here
	Views : {}, //All the uninstantiated Backbone Views the app might need
	activeViews : {}, //Any active, instantiated Backbone Views are stored here
	User : function() {
	    return Parse.User.current();
	}, //An extended version of Parse.User with some useful stuff 
	openURL : function(url) {
		if (this.config.phonegap) {
			navigator.app.loadUrl(url, { openExternal:true });
   			return false;
		}
		else {
			window.open(url);
		}
	},
	logOut : function() {
		Parse.User.logOut();
		this.trigger('logout');
		this.Router.navigate('login',  { trigger : true });
	}
};

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
 
    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                                 ? this
                                 : oThis,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };
 
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
 
    return fBound;
  };
}

$.extend(Bodeefit, Parse.Events);

