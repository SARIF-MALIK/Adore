import express from "express"
import ProductModel from "../models/products.model.js"

const router = express.Router(); 

router.post("/add-product", async(req, res)=>{
    const [productName, productID, category, prodImg] = req.body; 
    const isExist = await ProductModel.findOne({productName: productName.toLowerCase()}); 
    if(isExist){
        return res.status(400).send({
            success: false,
            msg: "product already exists", 
        })
    }

    await ProductModel.create({productName, productID, category, prodImg}); 

})