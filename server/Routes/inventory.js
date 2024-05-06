import express from "express"
import inventoryModel from "../models/inventory.model.js";
import productsModel from "../models/products.model.js";

const router = express.Router(); 

router.post("/add-inventory", async(req, res)=>{
try {
    const {productName, productQty, expectedExpiry, thresholdValue, availability, boughtPrice} = req.body; 
    const productObj = await productsModel.findOne({productName: productName.toLowerCase()}); 
    const isExist = await inventoryModel.findOne({product:productObj._id})
    if(isExist){
      return res.status(409).send('item already exists'); 
    }
    const newEntry = await inventoryModel.create({product: productObj._id, qty: productQty, expiryDate: expectedExpiry, thresholdValue, availability, boughtPrice}); 
    newEntry.save();
    const data = await inventoryModel.findOne(newEntry).populate('product');  
    // console.log(data) 
    res.status(201).send({
        success: true,
        msg: "inventory added successfully"
    })
} catch (error) {
    res.status(500).send(error.message); 
}

})

router.delete("/delete-inventory/:id", async (req, res)=>{
    try {
      const { id } = req.params;
      await inventoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Inventory Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting Inventory",
        error,
      });
    }
})

router.patch("/edit-inventory/:id", async(req, res)=>{
    try {
        const {productQty, expectedExpiry, thresholdValue, availability, boughtPrice} = req.body; 
        const { id } = req.params;
        const obj = await inventoryModel.findByIdAndUpdate(
          id,
          { qty: productQty, expiryDate: expectedExpiry, thresholdValue, availability, boughtPrice},
          { new: true }
        );
        res.status(200).send({
          success: true,
          message: "Inventory Updated Successfully",
          category,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error while updating Inventory",
        });
      }
})

export default router; 