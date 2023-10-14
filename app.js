const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Welcome to my world"})
})

app.listen(3002,()=>{
    console.log("we are running");
})
