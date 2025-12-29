const express = require("express");
const authUser = require("../middleware/userMiddleware")
const Workout = require("../models/workoutModel");


const router = express.Router();

// Require controllers 
const {getWorkouts, getWorkout, createWorkout, editWorkout, deleteWorkout } = require("../controllers/workoutController")

router.use(authUser)

// Get entire records (logical wriiten of routes in seperate file workoutcontroller)
router.get("/", getWorkouts )

// Get single Record
router.get("/:id", getWorkout )

// create record
router.post("/", createWorkout)

// update record
router.patch("/:id", editWorkout)

// delete record
router.delete("/:id", deleteWorkout)

module.exports = router
