const router = require("express").Router();
const path = require("path");

router.get("/api/workouts", (req, res) => {
  Transaction.find({})

    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});