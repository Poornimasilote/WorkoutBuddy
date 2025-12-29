require ("dotenv").config();

const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 4000


// DB CONNECTION
require("./db/connection")

// MIDDLEWARES
app.use(cors());
app.use(express.json())


// REQUIRE ROUTES
const workoutRoutes = require("./routes/workoutRoutes") 
const userRoutes = require("./routes/userRoutes")



// Routes 
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)



app.listen(port, ()=>{
    console.log(`Server running at PORT :${port}`)
}) 