import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express()  
app.listen(8080,()=>{
    mongoose.connect("mongodb://localhost:27017/gcet")
    console.log("server started");
});

const userSchema = mongoose.Schema({
    name:{type : String},email:{type:String},pass:{type:String}
});
const user = mongoose.model("User",userSchema);

const productSchema = mongoose.Schema({
    name:{type : String},price:{type:Number}
});

// const user = mongoose.model("User",userSchema);
const product= mongoose.model("product",productSchema);
app.use(cors());
app.use(express.json())
app.get("/",async(req,res)=>{
    return res.send("Good Morning");
});

app.post("/register",async(req,res)=>{ 
    const {name,email,pass} =req.body
    const result = await user.insertOne({name:name,email:email,pass:pass});
    return res.json(result);
});

app.post("/login",async(req,res)=>{ 
    const {email,pass} =req.body;
    const result = await user.findOne({email:email,pass:pass});
    if(result){
          return res.json("Accepted");
    }
    else{ return res.json("invalid");}
});


 app.get("/products",async(req,res)=>{ 
  const products = await product.find();
res.json(products);
 });


app.get("/",(req,res)=>{
    return res.send("Hello World");
});

app.get("/greet",(req,res)=>{
    return res.send("greetings");
});

app.get("/name",(req,res)=>{
    return res.send("Shruthi");
});

app.get("/weather",(req,res)=>{
    return res.send("45degrees");
});

// app.get("/product", (req, res) => {
//    const product = [
    
//         { name: "Laptop",price:34000 },
//         { name: "Mobile" ,price:35000}
//     ];

//     res.json(product); 
// });


