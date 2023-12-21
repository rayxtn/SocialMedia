import express from "express";
import mongoose from "mongoose";

const app = express();

app.use("/api",(req,res,next)=>{
    res.send("hello world !");
})

mongoose.connect('mongodb+srv://admin:tYujSyJGEGXKSaAu@cluster0.injwsdh.mongodb.net/blogapp?retryWrites=true&w=majority').then(app.listen(5000,()=>{
    console.log("application connected to the database and running on port 5000 ");
})).catch(()=>{
    console.log("error connecting to the database");
})

    




//tYujSyJGEGXKSaAu