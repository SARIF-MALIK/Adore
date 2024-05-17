import React, { useRef, useState } from "react";

function AddInventory({ toggle, setToggle }) {
  const [productData, setProductData] = useState({
    productName: "",
    qty: "",
    expiryDate: "",
    thresholdValue: "",
    availability: "",
    boughtPrice: "",
  });
  const inputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    console.log(productData); 
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
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="prodQty">Quantity</label>
              <input
                type="text"
                id="prodQty"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter quantity"
                name="qty"
                onChange={inputChange}
                value={productData.qty}
              />
            </div>
            <div className="flex justify-between items-center relative">
              <label htmlFor="prodExp">Expiry Date</label>
              <input
                type="date"
                id="prodExp"
                className="border-2 rounded-lg h-8 outline-none w-[200px] px-2"
                placeholder="DD/MM/YY"
                name="expiryDate"
                onChange={inputChange}
                value={productData.expiryDate}
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
