import express from 'express'
import cors from 'cors'
const app = express()  
app.listen(8080,()=>{
    console.log("server started");
});

app.use(cors())

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

app.get("/product", (req, res) => {
   const product = [
    
        { name: "Laptop",price:"34" },
        { name: "Mobile" ,price:"35"}
    ];

    res.json(product()); 
});


