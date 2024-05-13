import React from 'react'

const AddCategory = () => {
    return (
        <form id="form" action="" className='absolute  left-[40%]'>
            <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
                <div className="w-full p-6 shadow-lg bg-white rounded-md">
                    <h1 className=" w-full h-8 poppins-6 text-center" htmlFor="">Category</h1>
                    <div className="mt-4 mb-7">
                        <label for="username" className=" text-base mb-2">Category name </label>
                        <input type="text" id="username" className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter product name" />
                    </div>
                    <div className="flex  justify-end pt-3 poppins-5 text-sm text-[#48505E] gap-3">
                        <button className="btn">Discard</button>
                        <button className="btn bg-[#1366D9] text-white">
                            Add Category
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddCategory