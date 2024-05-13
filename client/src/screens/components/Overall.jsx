import React from 'react'
import { inventoryData } from './Data'

function Overall() {
    const category = inventoryData.categories; 
    const totalProducts = inventoryData.totalProducts; 
    const mostUsed = inventoryData.mostUsed; 
    const lowStocks = inventoryData.lowStocks; 
  return (
    <div className='h-40 border rounded-lg bg-white'>
        <h1 className='font-poppins font-medium text-lg px-5 lg:my-3'>Overall Inventory</h1>
        <div className='flex w-full justify-between px-5 h-24 '>
            <div className="categories flex flex-col gap-3">
                <h2 className='poppins-6 text-[#1570EF]'>Categories</h2>
                <h2 className='poppins-5'>{category.count}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>{category.lastUpdated}</p>
            </div>
            <div className="total products flex flex-col gap-3">
                <h2 className='poppins-6 text-[#E19133]'>Total Products</h2>
                <div className='flex gap-5 lg:gap-14'>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>{totalProducts.count}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>{totalProducts.lastUpdated}</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>{totalProducts.revenue}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>in Value</p>
                </div>
                </div>
            </div>
            <div className="Most Used flex flex-col gap-3">
                <h2 className='poppins-6 text-[#845EBC]'>Most Consumed</h2>
                <div className='flex gap-5 lg:gap-14'>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>{mostUsed.count}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>{mostUsed.lastUpdated}</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>{mostUsed.cost}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Cost</p>
                </div>
                </div>
               
            </div>
            <div className="low-stocks flex flex-col gap-3">
                <h2 className='poppins-6 text-[#F36960]'>Low Stocks</h2>
               <div className='flex gap-5 lg:gap-14'>
               <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>{lowStocks.ordered}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>low in stock</p>
                </div>
                <div className='flex flex-col gap-3'>
                <h2 className='poppins-5'>{lowStocks.notInStock}</h2>
                <p className='poppins-4 text-[#858D9D] text-sm'>Not in stock</p>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Overall