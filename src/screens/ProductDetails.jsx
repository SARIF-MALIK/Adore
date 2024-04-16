import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ListedItem from "./components/ListedItem";

function ProductDetails() {

  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen`}>
        <Sidebar />
      </div>
      <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto`}>
        <div className>
          <Navbar />
        </div>
        <div>
        <ListedItem/>
      </div>
      </div>
    
    </div>
  );
}

export default ProductDetails
