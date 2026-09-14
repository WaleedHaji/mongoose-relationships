// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const User = require('./models/User')
const Listing = require('./models/Listing')
const Review = require('./models/Review')


const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])












// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT




async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


conntectToDB()




















// Routes go here








 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
