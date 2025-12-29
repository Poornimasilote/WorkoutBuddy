const Workout = require("../models/workoutModel")


// Get all Data 

const getWorkouts = async(req,res) =>{
    const user_id = req.user._id

      try{
       const workoutData = await Workout.find({user_id}).sort({createdAt:-1})
       res.status(200).json(workoutData)
  }catch(err){
      res.send(400).json({error:err.message})
  }
}

//get single data 
const getWorkout = async(req,res)=>{
    try{
        const id = req.params.id
        const workoutData = await Workout.findById({_id:id})
        res.status(200).json(workoutData)
    }catch(err){
        res.send(400).json({error:err.message})
    }
}

// create data
const createWorkout = async(req,res)=>{
   const{title,reps, load}=  req.body
   const user_id = req.user._id
    try{
        const newWorkout = new Workout({title,reps,load, user_id})
        const workout = await newWorkout.save();
        res.status(201).json(workout)
    }catch(err){
        res.send(400).json({error:err.message})
    }
}

// update data
const editWorkout = async (req, res)=>{
    try{
        const id = req.params.id
    const workoutData = await Workout.findByIdAndUpdate({_id:id}, req.body, {new:true})
    res.status(200).json(workoutData)
    }catch(err){
         res.send(400).json({error:err.message})
    }
}

// delete data 
const deleteWorkout = async(req,res)=>{
    try{
        const id = req.params.id
        const workoutData = await Workout.findByIdAndDelete({_id:id})
        res.status(200).json(workoutData)
    }catch(err){
        res.send(400).json({error:err.message})
    }
}


module.exports = {
    getWorkouts, getWorkout, createWorkout, editWorkout, deleteWorkout
}