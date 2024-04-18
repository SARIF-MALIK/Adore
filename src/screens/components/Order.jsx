import React from "react";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";

function Order({ toggle , setToggle}) {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Orders</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn bg-[#1366D9] text-white" onClick={()=>setToggle(!toggle)}>Place Order</button>
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Order History</button>
        </div>
      </div>
      <div>
        <table  className="text-[#667085] w-full">
          <tr className="h-10"
           
          >
            <th className="poppins-4 text-sm text-start">Products</th>
            <th className="poppins-4 text-sm text-start">Order Value</th>
            <th className="poppins-4 text-sm text-start">Quantity</th>
            <th className="poppins-4 text-sm text-start">Order ID</th>
            <th className="poppins-4 text-sm text-start">Expected Delivery</th>
            <th className="poppins-4 text-sm text-start">Status</th>
          </tr>
          
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td><Link to="/inventory/productdetails/">Maggi</Link></td>
            <td>₹4306</td>
            <td>43 Packets</td>
            <td>7535</td>
            <td>11/12/22</td>
            <td className="text-[#F79009]">Delayed</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Bru</td>
            <td>₹2557</td>
            <td>22 Packets</td>
            <td>5724</td>
            <td>21/12/22</td>
            <td className="text-[#1570EF]">Confirmed</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Coca cola</td>
            <td>₹2015</td>
            <td>41 Packets</td>
            <td>2775</td>
            <td>11/11/24</td>
            <td className="text-[#667085]">Returned</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Maggi</td>
            <td>₹4130</td>
            <td>43 Packets</td>
            <td>1256</td>
            <td>11/12/22</td>
            <td className="text-[#10A760]">Out for delivery</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Bru</td>
            <td>₹257</td>
            <td>22 Packets</td>
            <td>3412 Packets</td>
            <td>21/12/22</td>
            <td className="text-[#667085]">Returned</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Coca cola</td>
            <td>₹205</td>
            <td>41 Packets</td>
            <td>1230</td>
            <td>11/11/24</td>
            <td className="text-[#10A760]">Out for delivery</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Maggi</td>
            <td>₹430</td>
            <td>43 Packets</td>
            <td>6612</td>
            <td>11/12/22</td>
            <td className="text-[#F79009]">Delayed</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Bru</td>
            <td>₹257</td>
            <td>22 Packets</td>
            <td>1432</td>
            <td>21/12/22</td>
            <td className="text-[#1570EF]">Confirmed</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Coca cola</td>
            <td>₹205</td>
            <td>41 Packets</td>
            <td>4510</td>
            <td>11/11/24</td>
            <td className="text-[#F79009]">Delayed</td>
          </tr>
        </table>
      </div>
      <div>
      <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
          <button className="btn">Previous</button>
          <p className="">Page 1 of 10</p>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
