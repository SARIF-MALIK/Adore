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
import './sidebar.css'

function Sidebar() {
  return (
    <div className='flex flex-col h-full w-full justify-between p-5 border rounded-e-lg bg-white'>
        <ul className='poppins-5'>
        <li className='poppins-6 text-xl text-[#1570EF] pb-10'>CMS</li>
            <li><Link to="/"><IoHomeOutline size={24} className='inline mr-2'/>Dashboard</Link></li>
            <li><Link to="/inventory"><LiaLuggageCartSolid size={24} className='inline mr-2'/>Inventory</Link></li>
            <li><Link to="/reports"><IoIosStats size={24} className='inline mr-2'/>Reports</Link></li>
            <li><Link to="/suppliers"><FaRegUserCircle size={24} className='inline mr-2'/>Suppliers</Link></li>
            <li><Link to="/orders"><IoLogoDropbox size={24} className='inline mr-2'/>Orders</Link></li>
            <li><Link to="/branch"><LuClipboardSignature size={24} className='inline mr-2'/>Manage Branch</Link></li>
        </ul>

        <div>
            <ul className='poppins-5'>
                <li><CiSettings size={24} className='inline mr-2'/>Settings </li>
                <li><IoIosLogOut size={24} className='inline mr-2'/>Log Out </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar