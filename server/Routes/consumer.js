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
        // get the email of signed In user 
        const punchedByUser = await userModel.findOne({email: punchedBy.toLowerCase()});
        const inventory = await inventoryModel.findOne({product: product._id}).populate('product'); 
        if(!inventory || inventory.qty === 0) return res.status(409).send({
            success: false,
            msg: "out of stock", 
        })
        if(inventory.qty < qtyPicked){
            return res.status(409).send({
                success: false,
                msg: "low stock", 
            })
        }
        inventory.qty -= qtyPicked; 
        inventory.save(); 
        console.log(inventory); 
        const newEntry = await consumerModel.create({consumerName, qty: qtyPicked, product: product._id, punchedBy: punchedByUser._id});

        res.status(201).send({
            success: true,
            newEntry,
            msg: "consumer saved successfully"
        })
    } catch (error) {
        res.status(500).send(error.message); 
    }
    
    })
    
    export default router; 