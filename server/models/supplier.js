import mongoose from "mongoose"

const supplierSchema = new mongoose.model({
    supplierName:{
        type:String, 
        required:true, 
        trim:true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Inventory'
    },
    contact:{
        type: Number, 
        min: 10,
        required: true,
    },
    type:{
        type:String, 
        enum: ["Not Taking Return", "Taking Return"],
        required:true,
    },
    email:{
        type: String,
        required : true, 
        unique: true,
        lowercase: true,
    }
})

const Supplier = mongoose.model("supplier", supplierSchema); 
module.exports = Supplier; 
 