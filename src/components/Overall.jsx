import React from 'react'

function Overall() {
  return (
    <div className='h-48 border rounded-lg bg-white'>
        <h1 className='font-poppins font-medium text-lg px-5 my-5 lg:my-6'>Overall Inventory</h1>
        <div className='flex w-full justify-between px-5 h-24 '>
            <div className="categories flex flex-col gap-3">
                <h2 className='poppins-6 text-[#1570EF]'>Categories</h2>
                <h2 className='poppins-5'>14</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Last 7 days</p>
            </div>
            <div className="total products flex flex-col gap-3">
                <h2 className='poppins-6 text-[#E19133]'>Total Products</h2>
                <div className='flex gap-5 lg:gap-14'>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>868</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Last 7 days</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>₹ 25000</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Revenue</p>
                </div>
                </div>
            </div>
            <div className="Most Used flex flex-col gap-3">
                <h2 className='poppins-6 text-[#845EBC]'>Most Used</h2>
                <div className='flex gap-5 lg:gap-14'>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>5</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Last 7 days</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>₹ 2500</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Cost</p>
                </div>
                </div>
               
            </div>
            <div className="low-stocks flex flex-col gap-3">
                <h2 className='poppins-6 text-[#F36960]'>Low Stocks</h2>
               <div className='flex gap-5 lg:gap-14'>
               <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>12</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Ordered</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>2</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Not in stock</p>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Overall