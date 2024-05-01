import mongoose from "mongoose"
const inventorySchema  = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Product',
    }, 
    qty:{
        type:Number,
        required:true,
    },
    expiryDate:{
        type: Date,
    }, 
    thresholdValue:{
        type:Number
    }, 
    availability:{
        type: String,
        enum: ['In-stock', 'Out of stock', 'Low stock'],
        default: 'in stock' // Default value when not specified
    },
    boughtPrice:{
        type:Number,
        required:true, 
        min:1,
    },
})

export default mongoose.model('inventory', inventorySchema); 
