import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
        trim: true,
    }, 
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }, 
}, {timestamps: true})

export const User = mongoose.model('user', UserSchema); 
