import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import Supplier from "./components/Supplier";
import Newsupplier from "./Newsupplier";

function Suppliers() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen ${toggle? 'opacity-50' : '' }`}>
        <Sidebar />
      </div>
      <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto ${toggle? 'opacity-50' : '' }`}>
        <div className>
          <Navbar />
        </div>
        <div className>
          <Overall />
        </div>
        <div>
            <Supplier toggle={toggle} setToggle={setToggle}/>
        </div>
      </div>
   
      <div className="">
      {
        toggle && <Newsupplier/> 
      }
      </div>
    </div>
  );
}

export default Suppliers;
