const router = require("express").Router();
const Workout = require("../models/workout-module.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req,res) =>{
  console.log('id',req.params.id)
  console.log('body',req.body)
  Workout.findOneAndUpdate({_id:req.params.id},{$push:{exercises:req.body}})
  .then(dbWorkout => {
    console.log(dbWorkout)
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts", ({body}, res) => {
  console.log(body)
  const workoutInfo = 
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
