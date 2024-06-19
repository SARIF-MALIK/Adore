import express from "express";
import userModel from "../models/user.model.js";

const router = express.Router();

router.post("/add-user", async (req, res) => {
  try {
    const { name, email, password} = req.body;
    console.log(req.body)
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.status(409).send({
        success: false,
        msg: "user already exists",
      });
    }
    const newUser = new userModel({name, email, password}); 
    newUser.save(); 
    return res.status(200).send({
      success: true,
      msg: "user created successfully",
    });
    
  } catch (error) {
    console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error while creating user",
        });
  }
});

router.post("/login-user", async (req, res) => {
  try {
    const { email, password} = req.body;
    const isExist = await userModel.findOne({ email });
    if (!isExist) {
      return res.status(409).send({
        success: false,
        msg: "user not exists",
        });
        }
        console.log(isExist)
    if(isExist.password !== password)
    return res.status(400).send({
      success: false,
      msg: "invalid credentials",
    });
    return res.status(200).send({
      success: true,
      msg: "user logged in successfully",
    });
    
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

// password encryption 
router.patch("/edit-user", async(req, res)=>{
    try {
        const { userName, email, password, role, userImg } = req.body;
        const entry = await userModel.findOneAndUpdate(
            {email: email},
            { name: userName, password, role, userImg },
            { new: true }
          );
          res.status(200).send({
            success: true, 
            entry,
            message: "user updated successfully"
          })
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