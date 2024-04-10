import React from 'react'
import { MdFilterList } from "react-icons/md";

function Products() {
  return (
    <div className='w-full bg-white rounded-lg px-5'>
      <div className="header flex justify-between items-center">
        <div>
          <h1 className='font-poppins font-medium text-lg py-5'>Products</h1>
        </div>
        <div className='flex gap-3'>
          <button className='btn bg-[#1366D9] text-white'>Add Product</button>
          <button className='btn flex items-center justify-center gap-2'> <MdFilterList size={22}/>Filters</button>
          <button className='btn'>Download all</button>
        </div>
      </div>
    </div>
  )
}

export default Products