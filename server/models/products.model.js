import mongoose from "mongoose"

const productSchema = new mongoose.model({
    productName:{
        type:String, 
        required:true, 
        trim:true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    productID:{
        type: Number, 
        max: 10,
        required: true,
    },
    productImg:{
        type:String,
    },
})

export default mongoose.model("product", productSchema);  
 