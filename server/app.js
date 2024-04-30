import express from "express"
import path from "path"
import mongoose from "mongoose";
const app = express(); 

mongoose.connect('mongodb://localhost:27017/adore-cms');


app.listen(8080, ()=>{
    console.log("server is connected to : 8080"); 
})

