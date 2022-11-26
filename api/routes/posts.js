import express from "express";
import Post from "../models/Post.js";
const router = express.Router();

// Create Post

router.post('/', async(req,res)=>{
    console.log("hi");
    const newPost = new Post(req.body);
    try{
        console.log("32")
      const savedPost = await newPost.save();
      console.log("34")
      res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

// Update Posts

router.put("/:id", async (req,res)=>{
    try
    {
        const post = await Post.findById(req.params.id);

        if(post.username === req.body.username)
        {
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
                res.status(200).json(updatedPost);
            }catch(err){
                res.status(500).json(err);
            }
             
        }else{
            res.status(401).json("You can update only your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});


// Delete Post

router.delete("/:id", async (req,res) => {
   
    try{
        const post = await Post.findById(req.params.id);
        //console.log(post);
        if(post.username === req.body.username)
        {
            await post.delete();
            res.status(200).json("Post has been deleted");
        }else{
            res.status(401).json("You can only modify your posts");
        }
    }catch(err){
           res.status(500).json(err);
    }
})


//Get all posts
router.get("/",async(req,res)=>{

     const userName = req.query.user;
     const catName = req.query.cat;
     try{
        let posts;

        if(userName){
            posts = await Post.find({userName});
        }else if(catName){
            posts = await Post.find({
                categories: {
                    $in : [catName]
                }
            });
        }else{
            posts = await Post.find();
        }

        res.status(200).json(posts);
     }catch(err){
           res.status(500).json(err);
     }
});

// Get particular posts 
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);

        !post && res.status(500).json("No posts available");
        res.status(200).json(post);

    }catch(err){
         res.status(500).json(err);
    }
})
export default router;