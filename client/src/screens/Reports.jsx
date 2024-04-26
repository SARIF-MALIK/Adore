import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import Overview from "./components/Overview";
import { Charts } from "./components/Charts";
import BestSellProduct from "./components/BestSellProduct";
import BestSellCategory from "./components/BestSellCategory";

function Reports() {
  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
    <div className={`w-2/12 h-screen`}>
      <Sidebar />
    </div>
    <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto `}>
      <div className>
        <Navbar />
      </div>
      <div className="flex gap-5 justify-between">
        <Overview />
        <BestSellCategory/>
      </div>
      <div>
        <Charts/>
      </div>
      <div>
        <BestSellProduct/>
      </div>
    </div>
  </div>
  )
}

export default Reports
