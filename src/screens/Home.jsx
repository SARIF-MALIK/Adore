import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Overall from "./components/Overall";
import Newproduct from "./Newproduct";
import ListedItem from "./components/ListedItem";

function Home() {
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
            <Products toggle={toggle} setToggle={setToggle}/>
        </div>
        <div>
        <ListedItem/>
      </div>
      </div>
   
      <div className="">
      {
        toggle && <Newproduct/> 
      }
      </div>


    
    </div>
  );
}

export default Home;
