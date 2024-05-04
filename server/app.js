import express from "express"
import path from "path"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import categoryRouter from "./Routes/category.js";
import productRouter from "./Routes/product.js"; 


dotenv.config(); 
connectDB(); 

const app = express(); 
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/product', productRouter)

app.listen(PORT, ()=>{
    console.log("server is connected to : ", PORT); 
})

