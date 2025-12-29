const mongoose= require("mongoose")

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connection established")
}).catch((err)=>{
    console.log(`Error is ${err}`)
})