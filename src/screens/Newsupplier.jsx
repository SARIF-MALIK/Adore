import React from "react";
import { LuUser2 } from "react-icons/lu";

function Newsupplier() {
  return (
    <div className="absolute top-[15%] left-[40%]">
      <div className="bg-white w-[450px] h-[550px] p-5 rounded-lg">
        <h1 className="poppins-5 text-xl text-[#383E49]">New Supplier</h1>
        <div className="flex justify-center gap-5 items-center my-5">
          <div className="drag w-[81px] h-[81px] border-2 border-dashed rounded-full relative">
            <LuUser2
              size={70}
              className="absolute top-0 left-1 text-[#9D9D9D]"
            />
          </div>
          <div className="flex flex-col items-center poppins-4 text-[#858D9D] text-sm">
            <p>Drag image here</p>
            <p>or</p>
            <p className="text-[#448DF2]">Browse image</p>
          </div>
        </div>

        <div>
          <form
            action=""
            className="flex flex-col gap-3 poppins-5 text-[#48505E] text-sm"
          >
            <div className="flex justify-between items-center">
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                id="supplierName"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter supplier name"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="product">Product</label>
              <input
                type="text"
                id="product"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter product"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Select product category"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="price">Buying Price</label>
              <input
                type="number"
                id="price"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter buying price"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="number"
                id="contact"
                className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                placeholder="Enter quantity"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="type">Type</label>
              <span className=" flex flex-col">
                <input
                  type="text"
                  id="type"
                  className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                  placeholder="Not Taking return"
                />
                <input
                  type="text"
                  id="type"
                  className="border-2 rounded-lg h-8 border-1 outline-none border-[
#D0D5DD] p-2"
                  placeholder="Taking return"
                />
              </span>
            </div>
            <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
              <button className="btn">Discard</button>
              <button className="btn bg-[#1366D9] text-white">
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
