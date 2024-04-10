import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Overall from "./Overall";

function Home() {
  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3]">
      <div className="w-2/12 h-screen">
        <Sidebar />
      </div>
      <div className="w-10/12 flex flex-col gap-3 px-5">
        <div className>
          <Navbar />
        </div>
        <div className>
          <Overall />
        </div>
        <div>
            <Products/>
        </div>
      </div>
    </div>
  );
}

export default Home;
