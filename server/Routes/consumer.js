import express from "express"
import ProductModel from "../models/products.model.js"
import userModel from "../models/user.model.js";
import inventoryModel from "../models/inventory.model.js";
import consumerModel from "../models/consumer.model.js";

const router = express.Router(); 


router.post("/add-consumer", async(req, res)=>{
    try {
        const {consumerName, qtyPicked, productName, punchedBy} = req.body; 
        const product = await ProductModel.findOne({productName: productName.toLowerCase()}); 
        if(!product){
            return res.status(409).send({
                success: false,
                msg: "product does not exists", 
            })
        }
        if(product.qty < qtyPicked){
            return res.status(409).send({
                success: false,
                msg: "low stock", 
            })
        }
        const punchedByUser = userModel.findOne({email: punchedBy}); 
        const inventory = inventoryModel.findOne({product: productName}).populate('product'); 
        inventory.qty -= qtyPicked; 
        inventory.save(); 
        const newEntry = await consumerModel.create({consumerName, qty: qtyPicked, product: product._id, punchedBy: punchedByUser._id});

        res.status(201).send({
            success: true,
            msg: "consumer saved successfully"
        })
    } catch (error) {
        res.status(500).send(error.message); 
    }
    
    })
    
    export default router; 