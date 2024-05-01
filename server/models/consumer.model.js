import mongoose, { Mongoose } from "mongoose"

const consumerSchema = new mongoose.model({
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
        type: Mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
})

export default mongoose.model("consumer", consumerSchema);  
 