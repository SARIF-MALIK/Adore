import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConsumerData } from './Data'

const ConsumerInfo = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const ConsumerPerPage = 13;
    const startIndex = pageIndex * ConsumerPerPage;
    const endIndex = (pageIndex + 1) * ConsumerPerPage;
    const VisibleProduct = ConsumerData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ConsumerData.length / ConsumerPerPage);



    const handleNextClick = () => {
        if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
    };
    const handlePrevClick = () => {
        if (pageIndex > 0) setPageIndex(pageIndex - 1);
    };
    return (
        <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
            <div className="header flex justify-between items-center">
                <div>
                    <h1 className="poppins-5 text-lg py-5">Consumers </h1>
                </div>
            </div>
            <div>
                <table className="text-[#667085] w-full">
                    <tr className="h-10"
                    >
                        <th className="poppins-4 text-sm text-start">Conusmer name</th>
                        <th className="poppins-4 text-sm text-start">Product </th>
                        <th className="poppins-4 text-sm text-start">Quantity picked</th>
                        <th className="poppins-4 text-sm text-start">Punched by</th>
                    </tr>

                    {
                        VisibleProduct.map(item => {
                            return (
                                <tr className="poppins-5 text-sm border-t-2 h-10">
                                    <td><Link to="/inventory/productdetails/">{item.name}</Link></td>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td className="text-[#10A760]">{item.punchedBy}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <div>
                <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
                    <button className="btn" onClick={handlePrevClick}>
                        Previous
                    </button>
                    <p className="">
                        Page {pageIndex + 1} of {totalPages}
                    </p>
                    <button className="btn" onClick={handleNextClick}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConsumerInfo