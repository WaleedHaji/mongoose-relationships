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
async function testRelationships(){
    const createUser = await User.create({
        username: 'BuDawud',
        password: 'a1b2c3d4'
    })
    console.log(createUser)
}
// // testRelationships()


async function testRelationships(){
    const foundUser = await User.find()
    console.log(foundUser)
}
// testRelationships()

async function testRelationships(){
    const createListing = await Listing.create({
        streetAddress: 'building 13 road 555' ,
            city: 'Downtown' ,
            price: 500 ,
            size: 240 ,
            owner: '6aa7c92306967135a0c37592',
            category: 'N/A'
    })
    console.log(createListing)
}
// testRelationships()


async function testRelationships(){
    const foundListing = await Listing.find().populate('owner')
    console.log(foundListing)
}
testRelationships()



 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
