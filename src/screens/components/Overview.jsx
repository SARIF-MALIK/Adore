import React from 'react'

function Overview() {
  return (
    <div className='h-72 border rounded-lg bg-white w-[700px]'>
    <h1 className='font-poppins font-medium text-lg px-5 lg:my-3'>Overview</h1>
    <div className='flex w-full justify-between px-5 h-24 '>
        <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5'>₹21,190</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Total Profit</p>
        </div>
        <div className="revenue flex flex-col gap-3">
            <h2 className='poppins-5'>₹80,432</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Revenue</p>
        </div>
        <div className="revenue flex flex-col gap-3">
            <h2 className='poppins-5'>₹17,432</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Sales</p>
        </div>
    </div>
    <div className='flex justify-between'>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5'>₹1,21,190</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Net purchase value</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5'>₹80,493</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Net sales value</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5'>₹30,432</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>MoM Profit</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5'>₹1,10,497</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>YoY Profit</p>
        </div>
    </div>
    </div>
  )
}

export default Overview