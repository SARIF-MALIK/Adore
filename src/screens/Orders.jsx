import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Order from "./components/Order";
import Overall from "./components/Overall";
import PlaceOrder from "./PlaceOrder";

function Orders() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen  ${toggle ? 'opacity-50' : ''}`}>
        <Sidebar />
      </div>
      <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto ${toggle ? 'opacity-50' : ''}`}>
        <div className>
          <Navbar />
        </div>
        <div>
          <Overall />
        </div>
        <div>
          <Order toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
      <div>
        {
          toggle && <PlaceOrder />
        }
      </div>
    </div>
  );
}

export default Orders
