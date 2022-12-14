import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();

//UPDATE User

// router.put("/:id", async (req, res) => {
//   try {
//     console.log("hi");
//     if (req.body.userId === req.params.id) {
//       if (req.body.password) {
//         console.log("h2");
//         const salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(req.body.password, salt);
//       }
//       console.log("h4");

//       try {
//         console.log("hr");
//        // const posts = await Post.find({username: })
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id: req.params.id },
//           { $set: req.body },
//           { new: true }
//         );
//         console.log("herer")
//         console.log(updatedUser);
//         console.log("h3");
//         res.status(200).json(updatedUser);

        
//       } catch (err) {
//         console.log("err");
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can modify only your account");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      console.log("no")
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log("herher")
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log("err")
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE User

router.delete("/:id", async (req, res) => {
  // console.log()
  if (req.body.userId === req.params.id) {
    try {
      //console.log(req.params.id);
      const user = await User.findById(req.params.id);
      // console.log(user);
      !user && res.status(404).json("User not found");
      try {
        //await Post.deleteMany({username: req.username});
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json(err);
    }
  } else {
    res.status(401).json("You can only delete your account.");
  }
});

//GET User
router.get("/:id", async (req, res) => {
  try {
    console.log("heyy");
    console.log("enter");
    const user = await User.findById(req.params.id);
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET User by username
router.get("/username/:id", async (req, res) => {
  try {
    
    const user = await User.find({username : req.params.id});
   // console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
