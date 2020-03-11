// to import mongoDB
const mongoose = require("mongoose");

// to get all methods ogf mongoDB
const PostSchema = mongoose.Schema({
  title:{
        type: String,
        required: true
  },
  description: {
        type: String,
        required: true
  },
  date: {
        type: Date,
        default: Date.now
  }    
});

// the way we export
// In this case Posts is the name of our model and PostSchema is our Array which includes mongoose.Schema 
module.exports = mongoose.model("Posts", PostSchema);