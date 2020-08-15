require("dotenv/config");
//import express
const express = require("express");

//using all methods of express
const app = express();
// import body parser!
const bodyParser = require("body-parser")
//to import mongoose
const mongoose = require("mongoose")
// to activade env!
const cors = require("cors");
//Middlewares
app.use(cors())
app.use(bodyParser.json());

/** 
 app.use("/posts", (req,res)=>{
       console.log("This is a middleware running")
      })
      
      */

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute)


//ROUTES
app.get("/", (req,res) =>{
      res.send("We are on Home");
});


//connect to db
//DB_CONNECTION comes from .env file 
// In .env file I have my URL which includes user name and password 
// I hide my URL into .env file because of security matters!
mongoose.connect(
      process.env.DB_CONNECTION, 
{ useUnifiedTopology: true, useNewUrlParser: true } , ()=>
console.log("Connected to DB")
)

//!!!
//How to we start listening to the server 
app.listen(3000);