
//the model of User

(function (Bodeefit) {
    var user = Parse.User.extend({
        properties:{
            USERNAME: "username",  //the same as email address
            EMAIL: "email",
            FULLNAME: "fullname",
            PASSWORD: "password",
            SIGNUPSRC: "signupSrc",
            FACEBOOKID: "facebookId",
            TIMEZOME:"timezone"
        },
        getFirstName: function () {
            var nameObj = this.splitName();
            return nameObj.firstname;
        },
        getLastName: function () {
            var nameObj = this.splitName();
            return nameObj.lastname;
        },
        splitName: function () {
            var fullname = this.get('name'),
				firstname,
				lastname = fullname;

            if (!fullname) return { firstname: '', lastname: '' };

            if (fullname.indexOf(' ') > -1) {
                fullnameArr = fullname.split(' ');
                firstname = fullnameArr[0];
                lastname = fullname.replace(firstname + ' ', '');
            }
            return { firstname: firstname, lastname: lastname };
        }
    }, {
        logOut: function () {
            this.trigger('logout');
            Parse.User.logOut();
        },
        logIn: function (username, password, config) {
            console.log("xxxxx");
            Parse.User.logIn(username, password, {
                success: function (data) {
                    //this.trigger('login', data);
                    if (config && config.success && typeof (config.success) == "function") {
                        config.success(data);
                        console.log("1 success");
                    }
                }.bind(this),
                error: function (error) {
                    //this.trigger('login', error);
                    if (config && config.error && typeof (config.error) == "function") {
                        config.error(error);
                        console.log("2 error");
                    }
                }.bind(this)
            })
        }
    });


    Bodeefit.Models.User = user;
    console.log("init user model");

   // BodeefitWorkouts.User = BodeefitUser;
    //$.extend(BodeefitWorkouts.User, Parse.Events);

}(window.Bodeefit));

