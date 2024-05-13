import React from 'react'
import { CategoryData } from './Data'
import { Link } from 'react-router-dom'

const CategoryInfo = ({ toggle, setToggle }) => {
    return (
        <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
            <div className="header flex justify-between items-center">
                <div>
                    <h1 className="poppins-5 text-lg py-5">Category</h1>
                </div>
                <div className="flex gap-3">
                    <button
                        className="btn bg-[#1366D9] text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        Add Category
                    </button>
                </div>
            </div>
            <div>
                <table className="text-[#667085] w-full">
                    <tr className="h-10"
                    >
                        <th className="poppins-4 text-sm text-start">Name</th>
                        <th className="poppins-4 text-sm text-start"> ID</th>
                    </tr>

                    {
                        CategoryData.slice(0, 8).map(item => {
                            return (
                                <tr className="poppins-5 text-sm border-t-2 h-16">
                                    <td>{item.name}</td>
                                    <td>{item.id}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default CategoryInfo