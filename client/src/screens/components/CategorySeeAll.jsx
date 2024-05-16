import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { BSCategory } from './Data'

const CategorySeeAll = () => {
    return (
        <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
            <div className={`w-2/12 h-screen`}>
                <Sidebar />
            </div>
            <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto`}>
                <div className>
                    <Navbar />
                </div>
                <div>
                    <CategorySeeAll2 />
                </div>
     
            </div>
        </div>

    )
}

export default CategorySeeAll


const CategorySeeAll2 = () => {
    return (
        <div>
            <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
                <div className="header  justify-between items-center">
                    <div>
                        <h1 className="poppins-5 text-xl py-5  text-align-center">Best selling categories</h1>
                    </div>
                </div>
                <div>
                    <table className="text-[#667085] w-full">
                        <tr className="h-10">
                            <th className="poppins-4 text-sm text-start">Category</th>
                            <th className="poppins-4 text-sm text-start">Turn Over</th>
                            <th className="poppins-4 text-sm text-start">Increase By</th>
                        </tr>
                        {
                            BSCategory.map((item) => {
                                return (
                                    <tr className="poppins-5 text-sm border-t-2 h-10">
                                        <td>{item.category}</td>
                                        <td>{item.turnOver}</td>
                                        <td className="text-[#10A760]">{item.increaseBy}</td>
                                    </tr>
                                )
                            })
                        }

                        {/* <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Vegetable</td>
                            <td>₹27,000</td>
                            <td className="text-[#10A760]">3.3%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Instant Food</td>
                            <td>₹22,000</td>
                            <td className="text-[#10A760]">2%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr>
                        <tr className="poppins-5 text-sm border-t-2 h-10">
                            <td>Household</td>
                            <td>₹18,000</td>
                            <td className="text-[#10A760]">1.5%</td>
                        </tr> */}
                    </table>
                </div>
            </div>
        </div>
    )
}