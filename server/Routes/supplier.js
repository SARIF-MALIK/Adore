import express from "express";
import supplierModel from "../models/supplier.model.js";
import categoryModel from "../models/category.model.js";
import productsModel from "../models/products.model.js";
import ImageKit from "imagekit";

const router = express.Router();

router.get("/img-signature", async (req, res) => {
  var imagekit = new ImageKit({
    publicKey: process.env.IMGKIT_PUBLIC_API,
    privateKey: process.env.IMGKIT_PRIVATE_API,
    urlEndpoint: process.env.IMGKIT_URL_ENDPOINT,
  });
  var authenticationParameters = imagekit.getAuthenticationParameters();
  authenticationParameters.publicKey = process.env.IMGKIT_PUBLIC_API;
  res.send(JSON.stringify(authenticationParameters));
});

router.post("/add-supplier", async (req, res) => {
  try {
    const {
      supplierName,
      supplierImg,
      contact,
      email,
      type,
      categoryArr,
      productArr,
    } = req.body;
    const isExist = await supplierModel.findOne({ email });
    if (isExist) {
      return res.status(409).send({
        success: false,
        msg: "supplier with same details already exists",
      });
    }

    const categoryObj = await categoryModel.find({});

    const categoryObjIdsArr = categoryArr.map((item) => {
      const category = categoryObj.find(
        (category) => category.category === item.categoryName
      );
      return category ? category._id : null; // If category is found, return its ObjectId, otherwise null
    });
    // console.log(categoryObjIdsArr);

    const productObj = await productsModel.find({});

    const productObjIdsPrice = productArr.map((item) => {
      const product = productObj.find(
        (obj) => obj.productName === item.productName
      );
      return product
        ? { id: product._id, price: item.price, date: item.date }
        : null;
    });
    console.log(productObjIdsPrice);

    const newEntry = new supplierModel({
      supplierName,
      supplierImg,
      contact,
      email,
      type,
      category: categoryObjIdsArr,
      product: productObjIdsPrice,
    });
    newEntry.save();
    res.status(201).send({
      success: true,
      msg: "supplier added successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/delete-supplier/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await supplierModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "supplier removed Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while removing supplier",
      error,
    });
  }
});

router.patch("/edit-supplier/:id", async (req, res) => {
  try {
    const {
      supplierName,
      supplierImg,
      contact,
      email,
      type,
      categoryArr,
      productArr,
    } = req.body;
    const { id } = req.params;
    const category = await supplierModel.findByIdAndUpdate(
      id,
      {
        supplierName,
        supplierImg,
        contact,
        email,
        type,
        category: categoryObjIdsArr,
        product: productArr,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Supplier details updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating supplier details",
    });
  }
});

export default router;
