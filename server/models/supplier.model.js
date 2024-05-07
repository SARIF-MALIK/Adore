import mongoose, { mongo } from "mongoose"

const supplierSchema = new mongoose.Schema({
    supplierName:{
        type:String, 
        required:true, 
        trim:true,
        lowercase:true,
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
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Product',
            },
            price:{
              type:Number,      
            },
            date:{
                type:Date,
            }
        },
    ],


})

export default mongoose.model("supplier", supplierSchema);  
 