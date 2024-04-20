import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoIosStats } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io";
import { LuClipboardSignature } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex flex-col h-full w-full justify-between p-5 border rounded-e-lg bg-white'>
        <ul className='poppins-5 flex flex-col'>
         <Link to='/' className='poppins-6 text-xl text-[#1570EF] mb-10 mx-2'>CMS</Link>
            <Link to="/dashboard" className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><IoHomeOutline size={24} />Dashboard</Link>
            <Link to="/inventory" className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><LiaLuggageCartSolid size={24} />Inventory</Link>
            <Link to="/reports" className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><IoIosStats size={24} />Reports</Link>
            <Link to="/suppliers" className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><FaRegUserCircle size={24} />Suppliers</Link>
            <Link to="/orders" className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><IoLogoDropbox size={24} />Orders</Link>
            <Link to="/branch" className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><LuClipboardSignature size={24} />Manage Branch</Link>
        </ul>

        <div>
            <ul className='poppins-5'>
                <Link to='/settings' className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><CiSettings size={24} />Settings </Link>
                <Link to='/' className='flex my-5 gap-3 md:mx-3 cursor-pointer hover:text-[#1570EF]'><IoIosLogOut size={24} />Log Out</Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar