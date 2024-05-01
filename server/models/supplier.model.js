import mongoose, { mongo } from "mongoose"

const supplierSchema = new mongoose.model({
    supplierName:{
        type:String, 
        required:true, 
        trim:true,
    },
    supplierImg:{
        type:String,
    },
    contact:{
        type: Number, 
        min: 10,
        required: true,
    },
    email:{
        type: String,
        required : true, 
        unique: true,
        lowercase: true,
    },
    type:{
        type:String, 
        enum: ["Not Taking Return", "Taking Return"],
        required:true,
    },
    category:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        }
    ], 
    product:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product',
            price:{
              type:Number,      
            },
            date:{
                type:Date,
            }
        },
    ],


})

export const Supplier = mongoose.model("supplier", supplierSchema);  
 