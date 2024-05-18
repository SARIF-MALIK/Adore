import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LuUser2 } from "react-icons/lu";

const PlaceOrder = ({ toggle, setToggle }) => {
  const [orderData, setOrderData] = useState({
    product: "",
    orderID: "",
    qty: "",
    unitPrice: "",
    orderStatus: "confirmed",
    expectedDelivery: "",
    supplier: "",
  });
  const [productDB, setProductDB] = useState(null);
  const [supplierDB, setSupplierDB] = useState(null);
  const navigate = useNavigate();
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
  const fetchSupplierDB = async()=>{
    try {
        const response = await axios.get(
            "http://localhost:8080/api/v1/supplier/data-supplier"
          );
          const supplierArr = response.data.map((item) => {
            return item.supplierName;
          });
          // res.send(categoryArr);
          setSupplierDB(supplierArr);
          console.log(response.data);
    } catch (error) {
        console.log("error in fetching supplier from database", error);
        
    }
  }
  
  useEffect(() => {
    fetchProductDB();
    fetchSupplierDB(); 
  }, []);
  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(orderData);
      const response = await axios.post(
        "http://localhost:8080/api/v1/order/create-order/",
        { ...orderData }
      );
      console.log(response.data); // Log response from backend
      // Reset form fields and state
      setOrderData({
        product: "",
        orderID: "",
        qty: "",
        unitPrice: "",
        orderStatus: "confirmed",
        expectedDelivery: "",
        supplier: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      navigate("/orders");
      setToggle(!toggle);
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="absolute  left-[40%]">
      <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
        <div className="w-full p-6 shadow-lg bg-white rounded-md">
          <h1 className=" w-full h-8 poppins-6 text-center" htmlFor="">
            Place Order
          </h1>
          <div className="mt-4 mb-7 flex justify-between items-center">
            {productDB && (
              <>
                <label htmlFor="prodName">Product Name</label>

                <input
                  type="text"
                  id="prodName"
                  className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                  placeholder="Enter product name"
                  name="product"
                  onChange={handleChange}
                  value={orderData.product}
                  list="productList"
                  required
                />
                <datalist id="productList">
                  {productDB.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item.value}
                      </option>
                    );
                  })}
                </datalist>
              </>
            )}
          </div>
          <div className="mt-3 mb-7">
            <label for="username" className=" text-base mb-2">
              Unit Price
            </label>
            <input
              type="text"
              id="username"
              className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter order value"
              name="unitPrice"
                  onChange={handleChange}
                  value={orderData.unitPrice}
            />
          </div>
          <div className="mt-3 mb-7">
            <label for="username" className=" text-base mb-2">
              Quantity
            </label>
            <input
              type="text"
              id="username"
              className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter quantity"
              name="qty"
                  onChange={handleChange}
                  value={orderData.qty}
              
            />
          </div>
          <div className="mt-3 mb-7">
            <label for="username" className=" text-base mb-2">
              Order ID{" "}
            </label>
            <input
              type="text"
              id="username"
              className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Order Id"
              name="orderID"
                  onChange={handleChange}
                  value={orderData.orderID}
            />
          </div>
          <div className="mt-3 mb-7">
          <label htmlFor="prodExp">Expected Delivery</label>
              <input
                type="date"
                id="prodExp"
                className="border-2 rounded-lg h-8 outline-none w-[200px] px-2"
                placeholder="DD/MM/YY"
                name="expectedDelivery"
                  onChange={handleChange}
                  value={orderData.expectedDelivery}
              />
          </div>
          <div className="mt-3 mb-7">
           {supplierDB && (
            <>
            <label for="username" className=" text-base mb-2">
              Supplier{" "}
            </label>
            <input
              type="text"
              id="username"
              className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter supplier Name"
              name="supplier"
                  onChange={handleChange}
                  value={orderData.supplier}
                list="supplierList"
                
            />
            <datalist id="supplierList">
            {supplierDB.map((item)=>{
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
          <div className="mt-3 mb-7 flex justify-between items-center relative">
            <label for="username" className=" text-base mb-2">
              Status
            </label>
            <select onChange={handleChange} name="orderStatus" id="orderStatus" className="border-2 rounded-lg h-8 outline-none w-[200px] px-2">
  <option value="confirmed">Confirmed</option>
  <option value="Out for Delivery">Out for Delivery</option>
  <option value="Delayed">Delayed</option>
  <option value="cancelled">Cancelled</option>
</select>
          </div>
          <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
            <button className="btn" onClick={() => setToggle(!toggle)}>
              Discard
            </button>
            <button type="submit" className="btn bg-[#1366D9] text-white">Add Product</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
