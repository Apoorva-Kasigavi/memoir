import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import categoryRoute from "./routes/categories.js";
import authRoute from "./routes/auth.js"
//middleware
const app = express();
dotenv.config();
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',categoryRoute);
app.use('/api/auth',authRoute);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.listen("5000" , (req,res)=>{
    console.log("Backend is running on port 5000");
})