import express from "express"
import ProductModel from "../models/products.model.js"
import supplierModel from "../models/supplier.model.js";
import ordersModel from "../models/orders.model.js";
import inventoryModel from "../models/inventory.model.js";


const router = express.Router(); 

router.post("/create-order", async(req, res)=>{
    try {
        const {orderID, qty, unitPrice, orderStatus, expectedDelivery, supplier, product} = req.body; 
        const isProductExist = await ProductModel.findOne({productName: product.toLowerCase()}); 
        if(!isProductExist){
            return res.status(409).send({
                success: false,
                msg: "product not exists", 
            })
        }
        const isSupplierExist = await supplierModel.findOne({supplierName: supplier.toLowerCase()}); 
        if(!isSupplierExist){
            return res.status(409).send({
                success: false,
                msg: "supplier not exists", 
            })
        }

        const newEntry = await ordersModel.create({orderID, qty, unitPrice, status: orderStatus, expectedDelivery, supplier: isSupplierExist._id, product: isProductExist._id});
        if(newEntry.status =="confirmed"){
            const inventory = await inventoryModel.findOneAndUpdate(
                {product: isProductExist._id},
                {$inc: {qty : qty}},
                {new:true}
            )
        }
        res.status(201).send({
            success: true,
            msg: "order placed successfully"
        })
    } catch (error) {
        res.status(500).send(error.message); 
    }
    
    })

    export default router; 