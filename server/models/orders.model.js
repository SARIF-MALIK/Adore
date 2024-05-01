import mongoose from "mongoose"
const orderSchema  = new mongoose.Schema({
    orderID:{
        type:String,
        required:true,
        trim:true,
    },
    qty:{
        type:Number,
        required:true,
    },
    unitPrice:{
        type:Number,
        required:true,
    },
    status:{
        type: String,
        enum: ['confirmed', 'Out for Delivery', 'Delayed', 'cancelled'],
        default: 'confirmed' // Default value when not specified
    },
    expectedDelivery:{
        type: Date,
    }, 
    supplier:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Supplier',
    }, 
    product:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Product',
    },
})

export default mongoose.model('order', orderSchema); 
