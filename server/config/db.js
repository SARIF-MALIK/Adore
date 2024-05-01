import mongoose from "mongoose";
// import {initData}  from "./initData.js";

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connected to mongoDB ${conn.connection.host}`)    
        // await initData(); 
    } catch (e) {
        console.log('error in mongodb connection', e); 
    }
}

export default connectDB;  