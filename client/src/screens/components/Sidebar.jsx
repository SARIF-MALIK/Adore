import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoIosStats, IoMdPerson } from "react-icons/io";
import { FaProductHunt, FaRegUserCircle } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io";
import { LuClipboardSignature } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";




function Sidebar() {
  return (
    <div className='flex flex-col h-full w-full justify-between p-5 border rounded-e-lg bg-white'>
      <ul className='poppins-5 flex flex-col'>
        <NavLink exact to="/" className='poppins-6 text-xl text-[#1570EF] mb-10 mx-2' >CMS</NavLink>
        <CustomNavLink to="/dashboard"><IoHomeOutline size={24} />Dashboard</CustomNavLink>
        <CustomNavLink to="/product"><RiProductHuntLine size={24} />Product</CustomNavLink>
        <CustomNavLink to="/category"><BiCategory size={24} />Category</CustomNavLink>
        <CustomNavLink to="/consumers"><IoMdPerson size={24} />Consumers</CustomNavLink>
        <CustomNavLink to="/inventory"><LiaLuggageCartSolid size={24} />Inventory</CustomNavLink>
        <CustomNavLink to="/reports"><IoIosStats size={24} />reports</CustomNavLink>
        <CustomNavLink to="/suppliers"><FaRegUserCircle size={24} />suppliers</CustomNavLink>
        <CustomNavLink to="/orders"><IoLogoDropbox size={24} />orders</CustomNavLink>
        {/* <CustomNavLink to="/branch"><LuClipboardSignature size={24} />branch</CustomNavLink> */}
      </ul>

      <div>
        <ul className='poppins-5'>
          <NavLink to='/settings' className='flex my-5 gap-3 md:mx-3 cursor-pointer' activeClassName='text-[#1570EF]'><CiSettings size={24} />Settings</NavLink>
          <NavLink exact to='/' className='flex my-5 gap-3 md:mx-3 cursor-pointer' activeClassName='text-[#1570EF]'><IoIosLogOut size={24} />Log Out</NavLink>
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;


const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex my-5 gap-3 md:mx-3 cursor-pointer text-[#1570EF]"
          : "flex my-5 gap-3 md:mx-3 cursor-pointer"
      }
    >
      {children}
    </NavLink>
  )
}
