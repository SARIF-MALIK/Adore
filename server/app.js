import express from "express"
import path from "path"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import categoryRouter from "./Routes/category.js";


dotenv.config(); 
connectDB(); 

const app = express(); 
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/v1/category', categoryRouter)

app.listen(PORT, ()=>{
    console.log("server is connected to : ", PORT); 
})

