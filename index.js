import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI
  
app.use("/users", userRouter);

app.use("/products", productRouter);

app.use("/order", orderRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// app.listen(8080, () => {
//   mongoose.connect(`${MONGODB_URI}`);
//   console.log("Server Started");
// });

// app.get("/",async(req,res)=>{
//     return res.send("Good Morning");
// });

// app.post("/register",async(req,res)=>{ 
//     const {name,email,pass} =req.body
//     const result = await userModel.insertOne({name:name,email:email,pass:pass});
//     return res.json(result);
// });

// app.post("/login",async(req,res)=>{ 
//     const {email,pass} =req.body;
//     const result = await userModel.findOne({email:email,pass:pass});
//     if(result){
//           return res.json("Accepted");
//     }
//     else{ return res.json("invalid");}
// });


//  app.get("/products",async(req,res)=>{ 
//   const products = await productModel.find();
// res.json(products);
//  });


// app.get("/",(req,res)=>{
//     return res.send("Hello World");
// });

// app.get("/greet",(req,res)=>{
//     return res.send("greetings");
// });

// app.get("/name",(req,res)=>{
//     return res.send("Shruthi");
// });

// app.get("/weather",(req,res)=>{
//     return res.send("45degrees");
// });

// // app.get("/product", (req, res) => {
// //    const product = [
    
// //         { name: "Laptop",price:34000 },
// //         { name: "Mobile" ,price:35000}
// //     ];

// //     res.json(product); 
// // });


