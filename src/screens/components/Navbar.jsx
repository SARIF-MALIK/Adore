import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-20 bg-white flex items-center ">
      <div className="h-16 w-full flex justify-between items-center px-10">
        <div className="flex items-center w-48 h-10 md:w-80 gap-2 md:gap-3 bg-white rounded-sm border-[1px] pl-3">
          <CiSearch size={24} />
          <input
            type="text"
            placeholder="Search product, supplier, order"
            className="w-full rounded-sm outline-none"
          />
        </div>
<div className="flex items-center gap-3 md:gap-10">
          <CiBellOn size={24} />
          <FaUserCircle size={44} />
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
