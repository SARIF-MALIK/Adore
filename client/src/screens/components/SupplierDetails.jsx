import React, { useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { MdDelete } from 'react-icons/md';


const SupplierDEtails = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
            <div className={`w-2/12 h-screen ${toggle ? 'opacity-50' : ''}`}>
                <Sidebar />
            </div>
            <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto ${toggle ? 'opacity-50' : ''}`}>
                <div className>
                    <Navbar />
                </div>
                <div>
                    <div className="w-full bg-white rounded-lg px-5 py-4">
                        <div className="header flex justify-between items-center">
                            <div>
                                <h1 className="poppins-5 text-lg py-5">Richard Martin</h1>
                            </div>
                            <div className="flex gap-3">
                                <button className="btn flex items-center justify-center gap-2">
                                    {" "}
                                    <FiEdit2 size={22} />
                                    Edit
                                </button>
                                <button class=" btn flex items-center justify-center gap-2">
                                    <MdDelete />Delete
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="border-b-2	h-16 poppins-4 text-[16px] text-[#48505E]">
                                <ul className="flex ">
                                    <li className='m-5'>Overview</li>
                                    <li className='m-5'>Deal In</li>
                                    {/* <li className='m-5'>Adjustments</li> */}
                                    <li className='m-5'>History</li>
                                </ul>
                            </div>
                            <div className="my-5 px-5 ">
                                <div className="flex justify-between mr-10">
                                    <div className="min-w-[450px] flex flex-col gap-10">
                                        <div className="">
                                            <h1 className="poppins-6 text-[16px] text-[#48505E]">Supplier Details</h1>
                                            <table className="min-w-[560px] text-[#858D9D] poppins-5">

                                                <tr className="h-10">
                                                    <td>Supplier name</td>
                                                    <td className="text-[#5D6679]">Richard Martin</td>
                                                </tr>
                                                <tr className="h-10">
                                                    <td>Product </td>
                                                    <td className="text-[#5D6679]">Kitkat</td>
                                                </tr>
                                                <tr className="h-10">
                                                    <td>Contact No. </td>
                                                    <td className="text-[#5D6679]">7687764556</td>
                                                </tr>
                                                <tr className="h-10">
                                                    <td>Email </td>
                                                    <td className="text-[#5D6679]">richard@gmail.com	</td>
                                                </tr>
                                                <tr className="h-10">
                                                    <td>Product category</td>
                                                    <td className="text-[#5D6679]">Instant food</td>
                                                </tr>
                                            </table>
                                        </div>

                                        {/* <div className="">
                                <h1 className="poppins-6 text-[16px] text-[#48505E]">Supplier Details</h1>
                                <table className="min-w-[580px] text-[#858D9D] poppins-5">
                                    <tr className="h-10">
                                        <td>Supplier name</td>
                                        <td className="text-[#5D6679]">Ronal Martin</td>
                                    </tr>
                                    <tr className="h-10">
                                        <td>Contact Number</td>
                                        <td className="text-[#5D6679]">98674 56567</td>
                                    </tr>
                                </table>
                            </div> */}
                                    </div>
                                    <div className="min-w-56 flex flex-col items-center">
                                        <div className="drag w-[150px] h-[150px] border-2 border-dashed rounded-lg p-2 border-[#9D9D9D]">
                                            <img src="" alt="" />
                                        </div>
                                        {/* <div class="w-[200px] h-[180px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer" />
                            </div> */}
                                        <div className="">
                                            <h3 className='text-center poppins-6 text-[16px] text-[#48505E] mt-10'>Address</h3>
                                            <p className='  '>Suite 200 1742 Rippin Mall, Lake Charlatown, NE 56301</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SupplierDEtails