//import express
const express = require("express")
// to use Router function of express!!!
const router = express.Router();
// to import Post.js from model folder
const Post = require("../model/Post")

//GET BACK ALL THE POSTS!!!
//try to get dats and also callback catch error!!!
router.get("/", async (req,res) =>{
      try{
            const posts = await Post.find()
            res.json(posts);
      } catch (err){
            res.json({message: err});
      }
});

//  SUBMITS A POST when I write /cia
router.get("/cia", (req,res) =>{
      res.send("We are cia");
});

// post method!!
// I save the message using save() method!!!
router.post("/", async (req,res) =>{
     const post = new Post(
           {
                 title: req.body.title,
                 description: req.body.description
           }
     );

     try{

      const savedPost = await post.save();
            res.json(savedPost);
      }catch(err){
            res.json({message:err});
      }
});

//SPECIFIC POST
router.get("/:postId", async (req,res) =>{
      try{
            const post = await Post.findById(req.params.postId);
            res.json(post);
      } catch (err){
            res.json({ message: err})
      }
})

//DELETE POST
//We write an async function using try and also includng a callback function 
// using catch to get the error!!!
router.delete("/:postId", async (req,res) =>{
      try{
            const deletePost = await Post.remove({_id: req.params.postId});
            res.json(deletePost);
      } catch (err){
            res.json({ message: err})
      }
})


//UPDATE A POST
// so you could be able to modify messages!!!
router.patch("/:postId", async (req,res) =>{
      try{
            const updatedPost = await Post.updateOne(
                  {_id: req.params.postId},
                  { $set: { title: req.body.title}}
                  );
            res.json(updatedPost);
      } catch (err){
            res.json({ message: err})
      }
})
// to export router!
module.exports = router;