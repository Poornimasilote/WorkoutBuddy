const Workout = require("../models/workoutModel");

/**
 * GET all workouts (authenticated user only)
 */
const getWorkouts = async (req, res) => {
  try {
    // auth safety check
    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const user_id = req.user._id;

    const workouts = await Workout.find({ user_id })
      .sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * GET single workout (only if owned by user)
 */
const getWorkout = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const workout = await Workout.findOne({
      _id: req.params.id,
      user_id: req.user._id
    });

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * CREATE workout
 */
const createWorkout = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const { title, reps, load } = req.body;

    if (!title || !reps || !load) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const workout = await Workout.create({
      title,
      reps,
      load,
      user_id: req.user._id
    });

    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * UPDATE workout (only if owned by user)
 */
const editWorkout = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user._id },
      req.body,
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * DELETE workout (only if owned by user)
 */
const deleteWorkout = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user._id
    });

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout
};
