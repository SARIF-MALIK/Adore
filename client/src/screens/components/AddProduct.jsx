import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { resizeImage } from "../components/ResizeImg";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ toggle, setToggle }) => {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewURL] = useState("");
    const fileInput = useRef(null);
    const [formData, setFormData] = useState({
      productName: "",
      productID: "",
      category: "",
    });
    const [categoriesDB, setCategoriesDB] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCategoriesDB = async () => {
          try {
            const response = await axios.get(
              "http://localhost:8080/api/v1/category/getall-categories"
            );
            const categoryArr = response.data.map((item) => {
              return item.category;
            });
            // res.send(categoryArr);
            setCategoriesDB(categoryArr);
            console.log(response.data);
          } catch (error) {
            console.log("error in fetching categories from database", error);
          }
        };
        fetchCategoriesDB();
      }, []);
      const imgUploadToken = async () => {
        try {
          // Make a GET request to fetch image signature
          const response = await axios.get(
            "http://localhost:8080/api/v1/supplier/img-signature"
          );
          // Handle the response
          const { signature, expire, token, publicKey } = response.data;
          // console.log(signature, expire, token, publicKey);
          return { signature, expire, token, publicKey };
        } catch (error) {
          // Handle errors if any
          throw new Error(
            `Request failed unable to generate token for img: ${error.message}`
          );
        }
      };
    
      const imgUpload = async () => {
        const { signature, expire, token, publicKey } = await imgUploadToken();
    
        try {
          const formData = new FormData();
          formData.append("file", image.content);
          formData.append("fileName", image.name);
          formData.append("publicKey", publicKey);
          formData.append("signature", signature || "");
          formData.append("expire", expire || 0);
          formData.append("token", token);
    
          const response = await axios.post(
            "https://upload.imagekit.io/api/v1/files/upload",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include the one-time token in the Authorization header
                "Content-Type": "multipart/form-data",
              },
            }
          );
          //console.log(response.data);
          return response.data;
        } catch (error) {
          console.error("Error in post request to imageKit:", error);
        }
      };
    
      const handleFile = async (file) => {
        setImage(file);
        setPreviewURL(URL.createObjectURL(file));
        // reduce img width and height which auto return base64 in setImage
        await new Promise((resolve) => {
          resizeImage(file, 300, 300, "JPEG", 70, 0, "base64", setImage)
          resolve('done')
        });
      };
    
      const handleOndragOver = (e) => {
        e.preventDefault();
      };
    
      const handleOndrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let imageFile = e.dataTransfer.files[0];
        handleFile(imageFile);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('image in react state hook', image);
        let imgUrl = '';
        if (image) {
          try {
            const res = await imgUpload();
            imgUrl = res.url;
            // console.log(res.url);
          } catch (error) {
            console.error("Error uploading image:", error);
          }
          // console.log(formData); 
        }
    
        try {
          // console.log(formData);
          const response = await axios.post('http://localhost:8080/api/v1/product/add-product', { ...formData, productImg: imgUrl });
          console.log(response.data); // Log response from backend
          // Reset form fields and state
          setFormData({
            productName: "",
            productID: "",
            category: "",
          });
          setImage(null);
          setPreviewURL('');
        } catch (error) {
          console.error("Error:", error);
        } finally {
          navigate('/product')
          setToggle(!toggle)
        }
    
      };

    return (
        <form id="form" action="" className='absolute  left-[40%]'>
            <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
                <div className="w-full p-6 shadow-lg bg-white rounded-md">
                    <h1 className=" w-full h-8 poppins-6 text-center" htmlFor="">Place Order</h1>

                    <div className="flex justify-center gap-5 items-center my-5 mb-10">
                        <div>
                            <div
                                className="drag w-[81px] h-[81px] border-2 border-dashed rounded-lg overflow-hidden object-cover"
                                onDragOver={handleOndragOver}
                                onDrop={handleOndrop}
                                onClick={e => handleFile(e.target.files[0])}
                            >
                                {previewUrl && (
                                    <div className="image">
                                        <img src={previewUrl} alt="image" className="" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col items-center poppins-4 text-[#858D9D] text-sm">
                            <p>Drag image here</p>
                            <p>or</p>
                            <label htmlFor="imageInput" className="text-[#448DF2] hover:cursor-pointer">Browse image</label>
                            <input
                                type="file"
                                accept='image/*' hidden
                                ref={fileInput}
                                onChange={e => handleFile(e.target.files[0])}
                                id="imageInput"
                            />
                        </div>
                    </div>

                    <div className="mt-4 mb-7">
                        <label htmlFor="username" className=" text-base mb-2">Product Name </label>
                        <input value={formData.productName}
                    onChange={handleChange} name="productName" type="text" id="username" className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter product name" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label htmlFor="username" className=" text-base mb-2">Product Id</label>
                        <input value={formData.productID}
                    onChange={handleChange} name="productID" type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Product Id" />
                    </div>
                    <div className="mt-3 mb-7 flex justify-between items-center">
                    {categoriesDB && (
                <>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                    placeholder="Select product category"
                    value={formData.category}
                    onChange={handleChange}
                    list="categoryList"
                    required
                  />
                  <datalist id="categoryList">
                    {categoriesDB.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item.value}
                        </option>
                      )
                    })}
                  </datalist>
                </>
              )}
                      </div>
                    <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
                        <button className="btn" onClick={()=>{setToggle(!toggle)}}>Discard</button>
                        <button className="btn bg-[#1366D9] text-white" onClick={handleSubmit}>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddProduct