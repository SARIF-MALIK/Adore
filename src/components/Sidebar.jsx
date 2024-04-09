import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoIosStats } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io";
import { LuClipboardSignature } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <div>
        <h1>CMS</h1>
        <ul>
            <li><IoHomeOutline size={24} className='inline'/>Dashboard</li>
            <li><LiaLuggageCartSolid size={24} className='inline'/>Inventory</li>
            <li><IoIosStats size={24} className='inline'/>Reports</li>
            <li><FaRegUserCircle size={24} className='inline'/>Suppliers</li>
            <li><IoLogoDropbox size={24} className='inline'/>Orders</li>
            <li><LuClipboardSignature size={24} className='inline'/>Manage Store</li>
        </ul>

        <div>
            <ul>
                <li><CiSettings size={24} className='inline'/>Settings </li>
                <li><IoIosLogOut size={24} className='inline'/>Log Out </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar