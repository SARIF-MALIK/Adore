import React from "react";
import { MdFilterList } from "react-icons/md";

function Products() {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Products</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn bg-[#1366D9] text-white">Add Product</button>
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Download all</button>
        </div>
      </div>
      <div>
        <table  className="text-[#667085] w-full">
          <tr className="h-10"
           
          >
            <th className="poppins-4 text-sm text-start">Products</th>
            <th className="poppins-4 text-sm text-start">Buying Price</th>
            <th className="poppins-4 text-sm text-start">Quantity</th>
            <th className="poppins-4 text-sm text-start">Threshold Value</th>
            <th className="poppins-4 text-sm text-start">Expiry Date</th>
            <th className="poppins-4 text-sm text-start">Availability</th>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Maggi</td>
            <td>₹430</td>
            <td>43 Packets</td>
            <td>12 Packets</td>
            <td>11/12/22</td>
            <td className="text-[#10A760]">In- stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Bru</td>
            <td>₹257</td>
            <td>22 Packets</td>
            <td>12 Packets</td>
            <td>21/12/22</td>
            <td className="text-[#DA3E33]">Out of stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Coca cola</td>
            <td>₹205</td>
            <td>41 Packets</td>
            <td>10 Packets</td>
            <td>11/11/24</td>
            <td className="text-[#E19133]">Low stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Maggi</td>
            <td>₹430</td>
            <td>43 Packets</td>
            <td>12 Packets</td>
            <td>11/12/22</td>
            <td className="text-[#10A760]">In- stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Bru</td>
            <td>₹257</td>
            <td>22 Packets</td>
            <td>12 Packets</td>
            <td>21/12/22</td>
            <td className="text-[#DA3E33]">Out of stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Coca cola</td>
            <td>₹205</td>
            <td>41 Packets</td>
            <td>10 Packets</td>
            <td>11/11/24</td>
            <td className="text-[#E19133]">Low stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Maggi</td>
            <td>₹430</td>
            <td>43 Packets</td>
            <td>12 Packets</td>
            <td>11/12/22</td>
            <td className="text-[#10A760]">In- stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Bru</td>
            <td>₹257</td>
            <td>22 Packets</td>
            <td>12 Packets</td>
            <td>21/12/22</td>
            <td className="text-[#DA3E33]">Out of stock</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Coca cola</td>
            <td>₹205</td>
            <td>41 Packets</td>
            <td>10 Packets</td>
            <td>11/11/24</td>
            <td className="text-[#E19133]">Low stock</td>
          </tr>
        </table>
      </div>
      <div>
      <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
          <button className="btn">Previous</button>
          <p className="">page 1 of 10</p>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
