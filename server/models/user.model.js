import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
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
    role: {
        type: String,
        enum: ["admin", "superAdmin", "manager", "viewer"],
        default: "viewer", 
    }
}, {timestamps: true})

export default mongoose.model('User', UserSchema); 