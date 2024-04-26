import React from "react";
import { FiEdit2 } from "react-icons/fi";
import maggiPic from '/assets/maggi.jpeg'

function ListedItem() {
  return (
    <div className="w-full bg-white rounded-lg px-5 py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Maggi</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <FiEdit2 size={22} />
            Edit
          </button>
          <button className="btn">Download</button>
        </div>
      </div>
      <div>
        <div className="border-b-2	h-16 poppins-4 text-[16px] text-[#48505E]">
          <ul className="flex ">
            <li>Overview</li>
            <li>Purchases</li>
            <li>Adjustments</li>
            <li>History</li>
          </ul>
        </div>
        <div className="my-5 px-5 ">
          <div className="flex justify-between mr-10">
            <div className="min-w-[450px] flex flex-col gap-10">
            <div className="">
              <h1 className="poppins-6 text-[16px] text-[#48505E]">Primary Details</h1>
              <table className="min-w-[560px] text-[#858D9D] poppins-5">
                <tr className="h-10">
                    <td>Product name</td>
                    <td className="text-[#5D6679]">Maggi</td>
                </tr>
                <tr className="h-10">
                <td>Product ID</td>
                  <td className="text-[#5D6679]">456567</td>
                </tr>
                <tr className="h-10">
                <td>Product category</td>
                  <td className="text-[#5D6679]">Instant food</td>
                </tr>
                <tr className="h-10">
                <td>Expiry Date</td>
                  <td className="text-[#5D6679]">13/4/23</td>
                </tr>
                <tr className="h-10">
                <td>Threshold Value</td>
                  <td className="text-[#5D6679]">12</td>
                </tr>
              </table>
            </div>

            <div className="">
              <h1 className="poppins-6 text-[16px] text-[#48505E]">Supplier Details</h1>
            <table className="min-w-[580px] text-[#858D9D] poppins-5">
                <tr className="h-10">
                    <td>Supplier name</td>
                  <td className="text-[#5D6679]">Ronal Martin</td>
                </tr>
                <tr className="h-10">
                <td>Contact Number</td>
                  <td className="text-[#5D6679]">98674 56567</td>
                </tr>
            </table>
            </div>
            </div>
            <div className="min-w-56 flex flex-col items-center">
              <div className="drag w-[150px] h-[150px] border-2 border-dashed rounded-lg p-2 border-[#9D9D9D]">
                <img src={maggiPic} alt="" />
              </div>
              <div className="mt-10 flex flex-col gap-8 w-full">
                <div className="flex justify-between poppins-4 text-[16px]">
                  <span className="text-[#858D9D]">Opening Stock</span>
                  <span>40</span>
                </div>
                <div className="flex justify-between poppins-4 text-[16px]">
                  <span className="text-[#858D9D]">Remaining Stock</span>
                  <span>34</span>
                </div>
                <div className="flex justify-between poppins-4 text-[16px]">
                  <span className="text-[#858D9D]">On the way</span>
                  <span>15</span>
                </div>
                <div className="flex justify-between poppins-4 text-[16px]">
                  <span className="text-[#858D9D]">Threshold Value</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[890px] mt-5">
            <h1 className="poppins-6 text-[16px] text-[#48505E] ">Stock Locations</h1>
            <div>
              <table className="text-[#667085] w-full mt-3">
                <tr className="h-10 bg-[#F0F1F3] text-[#5D6679] ">
                  <th className="poppins-6 text-sm text-start">Store Name</th>
                  <th className="poppins-6 text-sm text-start">
                    Stock in hand
                  </th>
                </tr>
                <tr className="poppins-5 h-10 border-b-2">
                  <td className="text-[#858D9D]">Sulur Branch</td>
                  <td className="text-[#1366D9]">15</td>
                </tr>
                <tr className="poppins-5 h-10 border-b-2">
                  <td className="text-[#858D9D]">Singanallur Branch</td>
                  <td className="text-[#1366D9]">19</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListedItem;
