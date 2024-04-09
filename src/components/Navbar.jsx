import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-24 bg-slate-400 flex items-center">
      <div className="h-16 w-full flex justify-between items-center px-10">
        <div className="flex w-48 md:w-80 gap-3 md:gap-5">
          <CiSearch size={24} />
          <input
            type="text"
            placeholder="Search product, supplier, order"
            className="w-full rounded-sm no-outline no-focus-outline"
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
