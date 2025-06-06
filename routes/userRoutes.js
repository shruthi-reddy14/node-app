   import express from "express";
   import userModel from "../models/userModel.js";
   import bcrypt from "bcryptjs";
   const userRouter = express.Router();
   import jwt from "jsonwebtoken";
   const SECRET_KEY="shit";

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashpassword = await bcrypt.hash(pass,10);
  const result = await userModel.insertOne({ name: name, email: email, pass: hashpassword });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const result = await userModel.findOne({ email });
  if (!result) return res.json({ message: "Invalid user" });
  const matchpass = await bcrypt.compare(pass,result.pass);
  if(!matchpass){
    return res.status(400).json({message:"Invalid pass"});
  }
  const token = jwt.sign({email:result.email, id:result._id},SECRET_KEY);
  console.log(result);
  return res.json({user:result,token:token});
});

userRouter.get("/:id/name", async (req, res) => {
  const email = req.params.id;
  const result = await userModel.findOne({ email},{_id:0,name:1});
  return res.json(result);
});



export default userRouter