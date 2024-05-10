import React, { useRef, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import axios from "axios"; // Import Axios for making HTTP requests

function Newsupplier() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewURL] = useState("");
  const fileInput = useRef(null);
  const [formData, setFormData] = useState({
    supplierName: "",
    product: "",
    category: "",
    price: "",
    email: "",
    contact: "",
    type: "notTakingReturn", // Default value
    supplierImg: ""
  });

  const imgUploadToken = async () => {
    try {
      // Make a GET request to fetch image signature
      const response = await axios.get("http://localhost:8080/api/v1/supplier/img-signature");

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
        'https://upload.imagekit.io/api/v1/files/upload',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the one-time token in the Authorization header
            'Content-Type': 'multipart/form-data'
          },
        }
      );
      console.log(response.data); // Log the response from ImageKit
    } catch (error) {
      console.error('Error in post request to imageKit:', error);
    }

  };


  const handleFile = (file) => {
    setImage(file);
    setPreviewURL(URL.createObjectURL(file));
    const reader = new FileReader();

    reader.onload = (event) => {
      // const fileContent = event.target.result;
      const base64String = event.target.result;
      console.log("Base64 encoded image:", base64String);
      setImage({
        name: file.name,
        type: file.type,
        content: base64String, // Content is now in buffer format
      });
      // console.log("File content in buffer format:", fileContent); 
    };
    
    reader.readAsDataURL(file); 
    // reader.readAsArrayBuffer(file); // Read the file as array buffer
    
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('image', image); 
    if(image){
      const res = await imgUpload(); 
      console.log(res);
      setFormData(...formData, {supplierImg:res.url})
    }
    // Send form data to backend
    console.log(formData);
    // try {
    //   const response = await axios.post('/your-backend-api-url', formData);
    //   console.log(response.data); // Log response from backend
    //   // Reset form fields and state
    //   setFormData({
    //     supplierName: '',
    //     product: '',
    //     category: '',
    //     price: '',
    //     contact: '',
    //     type: 'notTakingReturn' // Reset type to default value
    //   });
    //   setImage(null);
    //   setPreviewURL('');
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <div className="absolute top-[15%] left-[40%]">
      <div className="bg-white w-[450px] h-[550px] p-5 rounded-lg">
        <h1 className="poppins-5 text-xl text-[#383E49]">New Supplier</h1>
        <div className="flex justify-center gap-5 items-center my-5">
          <div
            className="drag w-[81px] h-[81px] border-2 border-dashed rounded-full relative overflow-hidden"
            onDrop={handleOndrop}
            onDragOver={handleOndragOver}
          >
            {previewUrl ? (
              <div className="image">
                <img src={previewUrl} alt="image" className="" />
              </div>
            ) : (
              <LuUser2
                size={70}
                className="absolute top-0 left-1 text-[#9D9D9D]"
              />
            )}
          </div>
          <div className="flex flex-col items-center poppins-4 text-[#858D9D] text-sm">
            <p>Drag image here</p>
            <p>or</p>
            <label
              htmlFor="supplierImg"
              className="text-[#448DF2] hover:cursor-pointer"
            >
              Browse image
            </label>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInput}
              onChange={(e) => handleFile(e.target.files[0])}
              id="supplierImg"
            />
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 poppins-5 text-[#48505E] text-sm"
          >
            {/* Supplier Name */}
            <div className="flex justify-between items-center">
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                id="supplierName"
                name="supplierName"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                placeholder="Enter supplier name"
                value={formData.supplierName}
                onChange={handleChange}
              />
            </div>
            {/* Contact Number */}
            <div className="flex justify-between items-center">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            {/* Email */}
            <div className="flex justify-between items-center">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div className="flex justify-between items-center">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                placeholder="Select product category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            {/* Product */}
            <div className="flex justify-between items-center">
              <label htmlFor="product">Product</label>
              <input
                type="text"
                id="product"
                name="product"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                placeholder="Enter product"
                value={formData.product}
                onChange={handleChange}
              />
            </div>
            {/* Buying Price */}
            <div className="flex justify-between items-center">
              <label htmlFor="price">Buying Price</label>
              <input
                type="number"
                id="price"
                name="price"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[#D0D5DD] p-2"
                placeholder="Enter buying price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            {/* Type */}
            <div className="flex justify-between items-center">
              <label>Type</label>
              <div className="flex flex-col w-52 px-4">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="notTakingReturn"
                    checked={formData.type === "notTakingReturn"}
                    onChange={handleChange}
                  />
                  Not Taking Return
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="takingReturn"
                    checked={formData.type === "takingReturn"}
                    onChange={handleChange}
                  />
                  Taking Return
                </label>
              </div>
            </div>
            
            {/* Form Buttons */}
            <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
              <button type="button" className="btn">
                Discard
              </button>
              <button type="submit" className="btn bg-[#1366D9] text-white">
                Add Supplier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsupplier;
