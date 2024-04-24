import React from 'react'
import { Link } from 'react-router-dom'

function BestSellCategory() {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Best selling categories</h1>
        </div>
        <div className="flex gap-3">
         <Link to="/">See All</Link>
        </div>
      </div>
      <div>
        <table  className="text-[#667085] w-full">
          <tr className="h-10"
           
          >
            <th className="poppins-4 text-sm text-start">Category</th>
            <th className="poppins-4 text-sm text-start">Turn Over</th>
            <th className="poppins-4 text-sm text-start">Increase By</th>
          </tr>
          
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td><Link to="/inventory/productdetails/">Vegetable</Link></td>
            <td>₹27,000</td>
            <td className="text-[#10A760]">3.3%</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Instant Food</td>
            <td>₹22,000</td>
            <td className="text-[#10A760]">2%</td>
          </tr>
          <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>Household</td>
            <td>₹18,000</td>
            <td className="text-[#10A760]">1.5%</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default BestSellCategory