const express = require("express"); 
const app = express(); 
const path = require("path"); 

mongoose.connect('mongodb://localhost:27017/adore-cms');


app.listen(8080, ()=>{
    console.log("server is connected to : 8080"); 
})

