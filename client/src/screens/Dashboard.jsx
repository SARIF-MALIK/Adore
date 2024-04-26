import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import DashContent from "./components/DashContent";
import ThreeD from "./components/ThreeD";
import BarChart from "./components/BarChart";
import { PieChart } from "./components/PieChart";

function Dashboard() {
  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className="w-2/12 h-full">
        <Sidebar />
      </div>
      <div className="w-10/12 flex flex-col gap-3 px-5 overflow-y-auto">
        {/* <Navbar /> */}
        <div>
          <DashContent />
        </div>
        {/* <Overall /> */}
        <div className="flex justify-center bg-white rounded-lg">
          <div className="w-[50%] h-80 bg-white rounded-lg">
            <BarChart />
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex justify-center bg-white w-1/2  rounded-lg h-80">
            <div className="bg-white">
              <PieChart />
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-lg mb-3 h-80">
            <ThreeD />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
