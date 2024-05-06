import express from "express";
import userModel from "../models/user.model.js";

const router = express.Router();

router.post("/add-user", async (req, res) => {
  try {
    const { userName, email, password, role,userImg } = req.body;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.status(409).send({
        success: false,
        msg: "user already exists",
      });
    }
    const newUser = new userModel({name: userName, email, password, role, userImg}); 
    newUser.save(); 
  } catch (error) {
    console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error while creating user",
        });
  }
});


router.delete("/delete-user", async (req, res)=>{
    try {
        const {email} = req.body; 
      await userModel.deleteOne({email})
      res.status(200).send({
        success: true,
        message: "User Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting user",
        error,
      });
    }
})

router.patch("/edit-user", async(req, res)=>{
    try {
        const { userName, email, password, role, userImg } = req.body;
        const category = await CategoryModel.UpdateOne(
            id,
            { name: userName, password, role, userImg },
            { new: true }
          );
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error while updating user details",
        });
    }
})

export default router; 