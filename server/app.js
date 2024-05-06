import express from "express"
import path from "path"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import categoryRouter from "./Routes/category.js";
import productRouter from "./Routes/product.js"; 
import inventoryRouter from "./Routes/inventory.js";
import consumerRouter from "./Routes/consumer.js";
import supplierRouter from "./Routes/supplier.js";  
import orderRouter from "./Routes/order.js"; 
import userRouter from "./Routes/user.js"


dotenv.config(); 
connectDB(); 

const app = express(); 
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/consumer', consumerRouter)
app.use('/api/v1/supplier', supplierRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/user', userRouter)


app.listen(PORT, ()=>{
    console.log("server is connected to : ", PORT); 
})

