import React, { useEffect, useRef, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddConsumers = ({toggle,setToggle}) => {

  const [formData, setFormData] = useState({
    consumerName: "",
    productName: "",
    qtyPicked: "",
    punchedBy: "",
  });
  const [productDB, setProductDB] = useState(null);
  useEffect(() => {
    const fetchproductDB = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/product/getall-product"
        );
        const productArr = response.data.map((item) => {
          return item.productName;
        });
        // res.send(categoryArr);
        setProductDB(productArr);
        console.log(response.data);
      } catch (error) {
        console.log("error in fetching categories from database", error);
      }
    };
    fetchproductDB();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
  
      const response = await axios.post('http://localhost:8080/api/v1/consumer/add-consumer', { ...formData });
      console.log(response.data); // Log response from backend
      
      setFormData({
        consumerName: "",
    productName: "",
    qtyPicked: "",
    punchedBy: "",
      });
   

    } catch (error) {
      console.error("Error:", error);
    } finally {
      navigate('/consumer')
      setToggle(!toggle)
    }

  };

  return (
    <form id="form" action="" className="absolute  left-[40%]">
      <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
        <div className="w-full p-6 shadow-lg bg-white rounded-md">
          <h1 className=" w-full h-4 poppins-6 text-center" htmlFor="">
            Add Consumer
          </h1>

          <div className="flex justify-center gap-5 items-center my-5 mb-10">
            {/* <div>
                            <div
                                className="drag w-[81px] h-[81px] border-2 border-dashed rounded-lg overflow-hidden object-cover"
                                onDragOver={handleOndragOver}
                                onDrop={handleOnDrop}
                                onClick={e => handleFile(e.target.files[0])}
                            >
                                {previewUrl && (
                                    <div className="image">
                                        <img src={previewUrl} alt="image" className="" />
                                    </div>
                                )}
                            </div>
                            {previewUrl && <span>{image.name}</span>}
                        </div> */}

            {/* <div className="flex flex-col items-center poppins-4 text-[#858D9D] text-sm">
                            <p>Drag image here</p>
                            <p>or</p>
                            <label htmlFor="imageInput" className="text-[#448DF2] hover:cursor-pointer">Browse image abc</label>
                            <input
                                type="file"
                                accept='image/*' hidden
                                ref={fileInput}
                                onChange={e => handleFile(e.target.files[0])}
                                id="imageInput"
                            />
                        </div> */}
          </div>

          <div className="mt-4 mb-7">
            <label htmlFor="consumerName" className=" text-base mb-2">
              Consumer Name{" "}
            </label>
            <input
              type="text"
              id="consumerName"
              name="consumerName"
              className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Consumer Name"
              value={formData.consumerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3 mb-7">
            {productDB && (
              <>
                <label htmlFor="product" className=" text-base mb-2">
                  Product{" "}
                </label>
                <input
                  type="text"
                  id="product"
                  name="productName"
                  className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Enter Product "
                  value={formData.product}
                  onChange={handleChange}
                  list="productList"
                  required
                />
                <datalist id="productList">
                  {productDB.map((item) => {
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
          <div className="mt-3 mb-7">
            <label htmlFor="qtyPicked" className=" text-base mb-2">
              Qunatity picked
            </label>
            <input
              type="number"
              id="qtyPicked"
              name="qtyPicked"
              className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Quantity picked"
              value={formData.qtyPicked}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3 mb-7">
            <label htmlFor="punchedBy" className=" text-base mb-2">
              Punched by{" "}
            </label>
            <input
              type="text"
              id="punchedBy"
              name="punchedBy"
              className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Punched by"
              value={formData.punchedBy}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
            <button type="button" className="btn" onClick={() => setToggle(!toggle)}>Discard</button>
            <button type="submit"  onClick={handleSubmit} className="btn bg-[#1366D9] text-white">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddConsumers;
