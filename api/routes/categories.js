import express from "express";
import Category from "../models/Category.js";
const router = express.Router();

router.post("/", async(req,res) => {
    const newCat = new Category(req.body);
    console.log("8888888888");
    console.log(newCat);
    console.log("(((((((((");
    try{
         console.log("5555555");
         const savedCat = await newCat.save();
         console.log(savedCat);
         console.log("1111111");
         res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/", async(req,res) => {
    try{
         const cats = await Category.find();
         res.status(200).json(cats);
    }catch(err){
        res.status(500).json(err);
    }
});


export default router;