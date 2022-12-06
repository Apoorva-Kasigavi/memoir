import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
const router = express.Router();

router.post('/register', async(req,res)=>{
    console.log("hi");
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        
       const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
        about: "-"
       });
         
       const user = await newUser.save();
       res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN

router.post('/login', async (req,res)=>{
    try{
   
         const user = await User.findOne({username:req.body.username});
          console.log(1);
          if(!user)
          {
            res.status(400).json("Wrong credentials");
            return;
          }
         
         
         console.log(2);
         const validated = await bcrypt.compare(req.body.password, user.password);
         console.log(3);
         if(!validated)
         {
            res.status(400).json("Wrong credentials");
            return;
         }
       
   
         console.log(4);
         const {password, ...others} = user._doc;
         console.log("fis");
         res.status(200).json(others);
        console.log("Sent");
    }catch(err){
           console.log("recoeve");
        res.status(400).json(err);
        console.log(6);
    }
});

export default router;