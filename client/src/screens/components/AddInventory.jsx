import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddInventory({ toggle, setToggle }) {
  const [productData, setProductData] = useState({
    productName: "",
    productQty: "",
    expectedExpiry: "",
    thresholdValue: "",
    availability: "",
    boughtPrice: "",
  });
  const [productDB, setProductDB] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductDB = async () => {
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
        console.log("error in fetching products from database", error);
      }
    };
    fetchProductDB();
  }, []);
  const inputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault(); 
    try {
      // console.log(formData);
      const response = await axios.post('http://localhost:8080/api/v1/inventory/add-inventory/', { ...productData });
      console.log(response.data); // Log response from backend
      // Reset form fields and state
      setProductData({
        productName: "",
        productQty: "",
        expectedExpiry: "",
        thresholdValue: "",
        availability: "",
        boughtPrice: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      navigate('/inventory')
      setToggle(!toggle)
    }
  }

  return (
    <div className="absolute top-[25%] left-[40%]">
      <div className="bg-white w-[450px] p-5 rounded-lg">
        <h1 className="poppins-5 text-xl text-[#383E49]">Add Inventory</h1>

        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 poppins-5 text-[#48505E] text-sm"
          >
            <div className="flex justify-between items-center">
            {productDB && (
                <>
              <label htmlFor="prodName">Product Name</label>
             
              <input
                type="text"
                id="prodName"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product name"
                name="productName"
                onChange={inputChange}
                value={productData.productName}
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
            <div className="flex justify-between items-center">
              <label htmlFor="prodQty">Quantity</label>
              <input
                type="text"
                id="prodQty"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter quantity"
                name="productQty"
                onChange={inputChange}
                value={productData.productQty}
              />
            </div>
            <div className="flex justify-between items-center relative">
              <label htmlFor="prodExp">Expiry Date</label>
              <input
                type="date"
                id="prodExp"
                className="border-2 rounded-lg h-8 outline-none w-[200px] px-2"
                placeholder="DD/MM/YY"
                name="expectedExpiry"
                onChange={inputChange}
                value={productData.expectedExpiry}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodAvl">Availability</label>
              <input
                type="text"
                id="prodAvl"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product Availablility"
                name="availability"
                onChange={inputChange}
                value={productData.availability}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodPrice">Bought Price</label>
              <input
                type="number"
                id="prodPrice"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter buying price"
                name="boughtPrice"
                onChange={inputChange}
                value={productData.boughtPrice}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodThval">Threshold Value</label>
              <input
                type="number"
                id="prodThval"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter threshold value"
                name="thresholdValue"
                onChange={inputChange}
                value={productData.thresholdValue}
              />
            </div>

            <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
              <button className="btn" onClick={() => setToggle(!toggle)}>
                Discard
              </button>
              <button type="submit" className="btn bg-[#1366D9] text-white">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddInventory;
