import mongoose from "mongoose"
const inventorySchema  = new mongoose.Schema({
    productName:{
        type:String, 
        required:true, 
        trim: true,
    }, 
    img:{
        type:String,
    },
    productId:{
        type:Number, 
        required: true,
        trim:true,
    },
    category:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required:true, 
        min:1,
    },
    qty:{
        type:Number,
        required:true,
    },
    thresholdValue:{
        type:Number
    }, 
    expiryData:{
        type: Date,
    }, 
    availability:{
        type: String,
        enum: ['In-stock', 'Out of stock', 'Low stock'],
        default: 'in stock' // Default value when not specified
    }
})

const Inventory = mongoose.model('inventory', inventorySchema); 
module.exports =  Inventory
