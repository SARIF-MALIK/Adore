import mongoose, { Mongoose } from "mongoose"

const consumerSchema = new mongoose.Schema({
    consumerName:{
        type:String, 
        required:true, 
        trim:true,
    },
    qty:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Inventory'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    punchedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default mongoose.model("consumer", consumerSchema);  
 