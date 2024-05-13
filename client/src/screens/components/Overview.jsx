import React from 'react'
import { overviewData } from './Data'

function Overview() {
  return (
    <div className='border rounded-lg bg-white w-full'>
    <h1 className='font-poppins font-medium text-lg px-5 lg:mt-3'>Overview</h1>
    <div className='flex w-full justify-between px-5 py-3 border-b-2'>
        <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.totalProfit}</h2>
            <p className='poppins-4 text-[#555555] text-sm'>Total Profit</p>
        </div>
        <div className="revenue flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.revenue}</h2>
            <p className='poppins-4 text-[#DBA362] text-sm'>Revenue</p>
        </div>
        <div className="revenue flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.sales}</h2>
            <p className='poppins-4 text-[#845EBC] text-sm'>Sales</p>
        </div>
    </div>
    <div className='flex justify-between py-3 px-5'>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.netPurchaseValue}</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Net purchase value</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.netSalesValue}</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>Net sales value</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.momProfit}</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>MoM Profit</p>
        </div>
    <div className="total-profit flex flex-col gap-3">
            <h2 className='poppins-5 text-[#5D6679]'>{overviewData.yoyProfit}</h2>
            <p className='poppins-4 text-[#858D9D] text-sm'>YoY Profit</p>
        </div>
    </div>
    </div>
  )
}

export default Overview