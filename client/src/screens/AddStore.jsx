import React from 'react'

const AddStore = () => {
    return (
        <form id="form" action="" className='absolute left-[40%]'>
            <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
                <div className="w-full p-6 shadow-lg bg-white rounded-md">
                    <h1 className=" w-32 h-8 font-medium" htmlFor="">Add Store</h1>
                    <div className="flex-1 justify-center items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                        <div className="relative ">
                            <div className="items-center flex justify-center max-w-xl mx-auto">
                                <label className="flex justify-center mr-4 w-20 h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                    <input type="file" name="" className="hidden" accept="image/png,image/jpeg" id="input" />
                                </label>
                            </div>
                        </div>
                        <span className="text-sm text-gray-600">Drop image here <span className="flex justify-center">or</span><span className="text-blue-600 text-sm ml-[4px] justify-centre ">Browse image</span></span>
                    </div>
                    <div className="mt-4 mb-7">
                        <label for="name" className=" text-base mb-2">Branch name </label>
                        <input type="text" id="username" className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Branch name" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="address" className=" text-base mb-2">Address</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter your Address" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="state" className=" text-base mb-2">State </label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter State" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="pin" className=" text-base mb-2">Pincode</label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Pin" />
                    </div>
                    <div className="mt-3 mb-7">
                        <label for="username" className=" text-base mb-2">Contact no. </label>
                        <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Your Contact no" />
                    </div>

                    <div className="mt-5">
                        <button type="submit" className="border-2 border-indigo-500 bg-[#1366D9] text-white py-1 rounded float-right w-32"><span className="text-sm">Add Store</span></button>
                        <button type="" className="border-2 border-500  text-grey py-1 rounded float-right mr-4 w-32 ">Discard</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddStore