//import express
const express = require("express");

//using all methods of express
const app = express();
// import body parser!
const bodyParser = require("body-parser")
//to import mongoose
const mongoose = require("mongoose")
// to activade env!
require("dotenv/config");
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
//so we have the link which includes user name and password in .env file 
// we send our link into .env because of the security of our website
// throuth .env file the hakers doenst be able to get our informations  
mongoose.connect(
      process.env.DB_CONNECTION, 
{ useUnifiedTopology: true, useNewUrlParser: true } , ()=>
console.log("Connected to DB")
)

//!!!
//How to we start listening to the server 
app.listen(3000);