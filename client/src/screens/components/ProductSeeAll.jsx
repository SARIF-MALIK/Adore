import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BSProduct } from './Data'

const ProductSeeAll = () => {
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
                    <ProductSeeAll2 />
                </div>
            </div>
        </div>
    )
}

export default ProductSeeAll

const ProductSeeAll2 = () => {
    return (
        <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
            <div className="header flex justify-between items-center">
                <div>
                    <h1 className="poppins-5 text-lg py-5">Best selling product</h1>
                </div>
            </div>
            <div>
                <table className="text-[#667085] w-full">
                    <tr className="h-10">
                        <th className="poppins-4 text-sm text-start">Product</th>
                        <th className="poppins-4 text-sm text-start">Product ID</th>
                        <th className="poppins-4 text-sm text-start">Category</th>
                        <th className="poppins-4 text-sm text-start">Remaining Quantity</th>
                        <th className="poppins-4 text-sm text-start">Turn Over</th>
                        <th className="poppins-4 text-sm text-start">Increase By</th>
                    </tr>

                    {
                        BSProduct.map(item => {
                            return (
                                <tr className="poppins-5 text-sm border-t-2 h-10">
                                    <td><Link to="/inventory/productdetails/">{item.product}</Link></td>
                                    <td>{item.productId}</td>
                                    <td>{item.category}</td>
                                    <td>{item.remainingQuantity}</td>
                                    <td>{item.turnOver}</td>
                                    <td className="text-[#10A760]">{item.increaseBy}</td>
                                </tr>
                            )
                        })
                    }

                    {/* <tr className="poppins-5 text-sm border-t-2 h-10">
                        <td><Link to="/inventory/productdetails/">Tomato</Link></td>
                        <td>23567</td>
                        <td>Vegetable</td>
                        <td>225 kg</td>
                        <td>₹17,000</td>
                        <td className="text-[#10A760]">2.3%</td>
                    </tr>
                    <tr className="poppins-5 text-sm border-t-2 h-10">
                        <td>Onion</td>
                        <td>25831</td>
                        <td>Vegetable</td>
                        <td>200 kg</td>
                        <td>₹12,000</td>
                        <td className="text-[#10A760]">1.3%</td>
                    </tr>
                    <tr className="poppins-5 text-sm border-t-2 h-10">
                        <td>Maggi</td>
                        <td>56841</td>
                        <td>Instant Food</td>
                        <td>200 Packets</td>
                        <td>₹10,000</td>
                        <td className="text-[#10A760]">1.3%</td>
                    </tr>
                    <tr className="poppins-5 text-sm border-t-2 h-10">
                        <td>Surf Excel</td>
                        <td>23567</td>
                        <td>Household</td>
                        <td>125 Packets</td>
                        <td>₹9,000</td>
                        <td className="text-[#10A760]">1%</td>
                    </tr> */}

                </table>
            </div>
        </div>
    )
}