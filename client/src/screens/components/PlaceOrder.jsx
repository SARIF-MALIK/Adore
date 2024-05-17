import React from 'react'
import { LuUser2 } from "react-icons/lu";

const PlaceOrder = ({ toggle, setToggle }) => {
    return (
        <form id="form" action="" className='absolute  left-[40%]'>
            <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
                <div className="w-full p-6 shadow-lg bg-white rounded-md">
                    <h1 className=" w-full h-8 poppins-6 text-center" htmlFor="">Place Order</h1>
                    <div className="mt-4 mb-7">
                        <label for="username" className=" text-base mb-2">Products </label>
                        <input type="text" id="username" className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter product name" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Order Value</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter order value" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Quantity</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter quantity" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Order ID </label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Order Id" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Expected Delivery</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter expected delivery" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Status</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter status" />
                    </div>
                    <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
                        <button className="btn" onClick={()=>setToggle(!toggle)}>Discard</button>
                        <button className="btn bg-[#1366D9] text-white">
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder