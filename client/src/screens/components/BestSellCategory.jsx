import React from 'react'
import { Link } from 'react-router-dom'
import { BSCategory } from './Data'

function BestSellCategory() {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Best selling categories</h1>
        </div>
        <div className="flex gap-3">
          <Link to="categorySeeAll">See All</Link>
        </div>
      </div>
      <div>
        <table className="text-[#667085] w-full">
          <tr className="h-10"

          >
            <th className="poppins-4 text-sm text-start">Category</th>
            <th className="poppins-4 text-sm text-start">Turn Over</th>
            <th className="poppins-4 text-sm text-start">Increase By</th>
          </tr>
          {
            BSCategory.slice(0, 4).map(item => {
              return (
                <tr className="poppins-5 text-sm border-t-2 h-10">
                  <td><Link to="/inventory/productdetails/">{item.category}</Link></td>
                  <td>{item.turnOver}</td>
                  <td className="text-[#10A760]">{item.increaseBy}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default BestSellCategory