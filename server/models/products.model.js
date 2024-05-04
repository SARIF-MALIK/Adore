import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productName:{
        type:String, 
        required:true, 
        trim:true,
        lowercase: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    productID:{
        type: Number, 
        required: true,
    },
    productImg:{
        type:String,
        trim:true,
    },
})

export default mongoose.model("Product", productSchema);  
 