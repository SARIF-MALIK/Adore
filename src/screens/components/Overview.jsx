import React from 'react'

function Overview() {
  return (
    <div className='border rounded-lg bg-white w-full'>
    <h1 className='font-poppins font-medium text-lg px-5 lg:mt-3'>Overview</h1>
    <div className='flex w-full justify-between px-5 py-3 border-b-2'>
        <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹21,190</h2>
            <p className='poppins-4 text-[#555555] text-sm'>Total Profit</p>
        </div>
        <div className="revenue flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹80,432</h2>
            <p className='poppins-4 text-[#DBA362] text-sm'>Revenue</p>
        </div>
        <div className="revenue flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹17,432</h2>
            <p className='poppins-4 text-[#845EBC] text-sm'>Sales</p>
        </div>
    </div>
    <div className='flex justify-between py-3 px-5'>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹1,21,190</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Net purchase value</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹80,493</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Net sales value</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹30,432</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>MoM Profit</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>₹1,10,497</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>YoY Profit</p>
        </div>
    </div>
    </div>
  )
}

export default Overview