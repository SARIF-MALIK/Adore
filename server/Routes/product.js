import express from "express"
import ProductModel from "../models/products.model.js"
import categoryModel from "../models/category.model.js";

const router = express.Router(); 

router.post("/add-product", async(req, res)=>{
try {
    const {productName, productID, prodCategory, prodImg} = req.body; 
    const isExist = await ProductModel.findOne({productID: productID}); 
    if(isExist){
        return res.status(409).send({
            success: false,
            msg: "product already exists", 
        })
    }
    const categoryObjId = await categoryModel.findOne({category: prodCategory}); 
    // console.log(prodCategory, prodImg); 
    const newEntry = await ProductModel.create({productName, productID, productImg: prodImg, category: categoryObjId._id});
    // const data = await ProductModel.findOne(newEntry).populate('category');  
    // console.log(data) 
    res.status(201).send({
        success: true,
        msg: "product saved successfully"
    })
} catch (error) {
    res.status(500).send(error.message); 
}

})

router.delete("/delete-product/:id", async (req, res)=>{
    try {
      const { id } = req.params;
      await ProductModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Product Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting product",
        error,
      });
    }
})

router.patch("/edit-product/:id", async(req, res)=>{
    try {
        const { productName, prodImg } = req.body;
        const { id } = req.params;
        const category = await CategoryModel.findByIdAndUpdate(
          id,
          { productName: productName, productImg: prodImg },
          { new: true }
        );
        res.status(200).send({
          success: true,
          message: "Product Updated Successfully",
          category,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error while updating product",
        });
      }
})



export default router; 