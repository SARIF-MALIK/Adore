import React from 'react'
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";

function Supplier({ toggle , setToggle}) {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Suppliers</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn bg-[#1366D9] text-white" onClick={()=>setToggle(!toggle)}>Add Supplier</button>
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Download all</button>
        </div>
      </div>
      <div>
        <table  className="text-[#667085] w-full">
          <tr className="h-10"
           
          >
            <th className="poppins-4 text-sm text-start">Supplier Name</th>
            <th className="poppins-4 text-sm text-start">Product</th>
            <th className="poppins-4 text-sm text-start">Contact Number</th>
            <th className="poppins-4 text-sm text-start">Email</th>
            <th className="poppins-4 text-sm text-start">Type</th>
            <th className="poppins-4 text-sm text-start">On the way</th>
          </tr>
          
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td><Link to="/inventory/productdetails/">Richard Martin</Link></td>
            <td>Kit kat</td>
            <td>7687764556</td>
            <td>richard@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>13</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Tom Homan</td>
            <td>Maaza</td>
            <td>9667754096</td>
            <td>tomhoman@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>-</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Veandir</td>
            <td>Dairy Milk</td>
            <td>9668754096</td>
            <td>veandir@gmail.com</td>
            <td className="text-[#DA3E33]">Not Taking Return</td>
            <td>-</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Charin</td>
            <td>Tomato</td>
            <td>9267545457</td>
            <td>charin@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>12</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Hoffman</td>
            <td>Milk Bikis</td>
            <td>9367546531</td>
            <td>hoffman@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>-</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Fainden Juke</td>
            <td>Marie Gold</td>
            <td>9667545982</td>
            <td>fainden@gmail.com</td>
            <td className="text-[#DA3E33]">Not Taking Return</td>
            <td>9</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Martin</td>
            <td>Saffola</td>
            <td>9867545457</td>
            <td>martin@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>-</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Joe Nike</td>
            <td>Good day</td>
            <td>9567545769</td>
            <td>joenike@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>-</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Dender Luke</td>
            <td>Apple</td>
            <td>9667545980</td>
            <td>dender@gmail.com</td>
            <td className="text-[#DA3E33]">Not Taking Return</td>
            <td>7</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Fainden Juke</td>
            <td>Marie Gold</td>
            <td>9667545982</td>
            <td>fainden@gmail.com</td>
            <td className="text-[#DA3E33]">Not Taking Return</td>
            <td>9</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Fainden Juke</td>
            <td>Marie Gold</td>
            <td>9667545982</td>
            <td>fainden@gmail.com</td>
            <td className="text-[#DA3E33]">Not Taking Return</td>
            <td>9</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td><Link to="/inventory/productdetails/">Richard Martin</Link></td>
            <td>Kit kat</td>
            <td>7687764556</td>
            <td>richard@gmail.com</td>
            <td className="text-[#10A760]">Taking Return</td>
            <td>13</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Fainden Juke</td>
            <td>Marie Gold</td>
            <td>9667545982</td>
            <td>fainden@gmail.com</td>
            <td className="text-[#DA3E33]">Not Taking Return</td>
            <td>9</td>
          </tr>
        </table>
      </div>
      <div>
      <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
          <button className="btn">Previous</button>
          <p className="">Page 1 of 10</p>
          <button className="btn">Next</button>
        </div>
      </div>
    </div>
  )
}

export default Supplier