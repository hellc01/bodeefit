
//the model of Workout

!(function (Bodeefit) {
    var workout = Parse.Object.extend('Workout', {

        defaults : {
            
        },
        properties:{
            TITLE: "title",
            DESCRIPTION: "description",
            MOVEMENTS: "movements",
            RESPS_PER_ROUND: "repsPerRound",
            ROUNDS: "rounds",
            WORKOUT_TYPE:"workoutType"
        },
        init : function() {
          
        },
        createView : function() {

        },
        getDetails: function () {
            var workoutType = this.get('workoutType');
            if (workoutType == 0) {
                return this.get('rounds') + ' rounds';
            }
            else if (workoutType == 1) {
                return this.get('minutes') + ' min AMRAP';
            }
            else if (workoutType == 2) {
                var text = "";
                var repsPerRound = this.get('repsPerRound');
                for (var i = 0; repsPerRound.length > i; i++) {
                    if (repsPerRound.length - 1 == i) {
                        text += repsPerRound[i];
                    }
                    else {
                        text += repsPerRound[i] + " x ";
                    }
                }
                return text + ' Triplet';
            }
        },
        retrieveMovements : function(a, b) {
            var movements = this.get('movements');
            if (movements) {
                $.each(movements, function(index, movement) {
                    if (!movement || !movement.movement) {
                        return;
                    }
                    var checkCollection = BodeefitWorkouts.activeCollections.movements.get(movement.movement.id);
                    if (checkCollection) {
                        movement.movement = checkCollection;
                    }
                    else {
                        if (movement.movement.id) {
                            movement.movement.fetch({
                                success : function(movement, one, two) {
                                    BodeefitWorkouts.activeCollections.movements.add(movement);
                                    this.trigger('load');
                                }.bind(this),
                                error : function(obj, error) {
                                    if (error.code == 101) {
                                        BodeefitWorkouts.activeCollections.movements.remove(movement.movement);
                                    }
                                }
                            });
                        }
                    }
                    if (!movement.movement.get('title')) {
     
                    }
                }.bind(this));
            }
        },

        startTimer : function() {

        },

        setupTimer : function() {
            if (!this.timer) {
                if (this.get('workoutType') != 1) {
                    this.timer = BodeefitWorkouts.Timer({ start: 0, direction: 'up' });
                }
                else {
                    this.timer = BodeefitWorkouts.Timer({ start: (parseFloat(this.get('minutes')) * 60 * 1000), direction: 'down' });
                }
            }
        }
    });

    Bodeefit.Models.Workout = workout;
    console.log("init workout model");

}(window.Bodeefit));
