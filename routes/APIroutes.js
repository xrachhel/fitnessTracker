const db = require("../models")
const mongojs = require("mongojs")

module.exports = function (app) {
    // app.post("/api/workouts", ({body}, res) => {
    //     db.Exercise.create(body)
    //     .then(({_id}) => db.Workout.findOneAndUpdate({}, {$push:{exercise:_id}}, {new:true}))
    //     .then(dbWorkout => {
    //         res.json(dbWorkout)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     });
    // });


    // GET routes
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .populate("exercises")
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
    });

    // app.get("/api/workouts/:id", (req, res) => {
    //     db.Workout.find({ _id: mongojs.ObjectId(req.params.id) })
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    // app.get("/api/exercises", (req, res) => {
    //     db.Exercise.find({})
    //         .then(dbExercise => {
    //             res.json(dbExercise);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });
    // POST routes
    // app.post("/api/workouts", ({ body }, res) => {
    //     db.Exercise.create(body)
    //         .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
    //         .then(dbWorkout => {
    //             res.json(dbWorkout)
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         });
    // });
    // app.post("/api/workouts", (req, res) => {
    //     db.Workout.create({})
    //     .then(dbWorkout => {
    //         res.json(dbWorkout)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
    // })
    app.post("/api/workouts",(req,res)=>{
        db.Workout.create({day: Date.now()})
            .then(workout=>{
                res.json(workout);
            }).catch(err=>{
                res.json(err);
            });
    });


    // PUT routes
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);

        db.Exercise.create(req.body)
            .then((data) => db.Workout.findOneAndUpdate(
                {_id: req.params.id},
                { 
                    $push: {
                        exercises: data._id 
                    }, 
                    $inc: {
                        totalDuration: data.duration
                    } 
                },
                { new: true })
            )
            .then(dbWorkout => {
            res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
      });

    // app.put("/api/workouts/:id", (req, res) => {
    //     console.log(req.body)
    //     db.Exercise.create(req.body)
    //     .then((data) => db.Workout.findOneAndUpdate({_id:req.params.body}, 
    //     {
    //         $push : {
    //             exercises: data._id
    //         }, 
    //     $inc : {totalDuration:data.duration}}, 
    //         {new: true}))
    //     .then(dbWorkout => {
    //         res.json(dbWorkout)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
    // })
    // app.put("/api/workouts/:id", (req, res) => {
    //     db.Exercise.updateOne({ _id: req.params.id },
    //         {
    //             $set:
    //             {
    //                 "name": req.body.name,
    //                 "weight": req.body.weight,
    //                 "sets": req.body.sets,
    //                 "reps": req.body.reps,
    //                 "duration": req.body.duration,
    //                 "distance": req.body.distance
    //             }
    //         })
    //         .then(dbWorkout => {
    //             res.json(dbWorkout)
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         })
    // })
    // app.put("/api/workouts/:id", function(req,res){
    //     db.Exercise.create(req.body, function(err, docs){
    //         if(err) throw err;
    //         db.Workout.update(
    //             {
    //                 _id: mongojs.ObjectId(req.params.id)
    //             },{$push:{exercises: docs._id}}, {new:true}).then(function(data){

    //         })
    //     });
    // })
}