import express from "express";
import CategoryModel from "../models/category.model.js";

const router = express.Router();

// user must already signIn and have access as per role 

router.get("/getall-categories", async(req, res)=>{
  const categoryObj = await CategoryModel.find({});
  const categoryArr = categoryObj.map(item=>{
    return (
      item.category
    )
  })
  res.send(categoryArr); 
})

router.post("/create-category", async (req, res) => {
  try {
    const categoryName = req.body.category.toLowerCase();
    console.log(req.body.category.toLowerCase())
    if (!categoryName) {
      return res.status(401).send({
        success: false,
        msg: "category name is required",
      });
    }
    const existingCategory = await CategoryModel.findOne({ category: categoryName });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        msg: "category already exist",
      });
    }

    const newEntry = new CategoryModel({category: categoryName})
    newEntry.save();
    res.status(201).send({
        success: true,
        msg: "category created successfully"
    })
    
  } catch (error) {
    res.status(500).send(error.message); 
  }
});

router.delete("/delete-category/:id", async (req, res)=>{
        try {
          const { id } = req.params;
          await CategoryModel.findByIdAndDelete(id);
          res.status(200).send({
            success: true,
            message: "Category Deleted Successfully",
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "error while deleting category",
            error,
          });
        }
})

router.patch("/edit-category", async(req, res)=>{
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await CategoryModel.findByIdAndUpdate(
          id,
          { category: name },
          { new: true }
        );
        res.status(200).send({
          success: true,
          message: "Category Updated Successfully",
          category,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error while updating category",
        });
      }
})

export default router; 

