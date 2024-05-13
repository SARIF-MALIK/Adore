import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import CategoryInfo from './components/CategoryInfo'

const Category = () => {
    return (
        <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
            <div className={`w-2/12 h-screen `}>
                <Sidebar />
            </div>
            <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto `}>
                <div className>
                    <Navbar />
                </div>
                <div className>
                    <CategoryInfo />
                </div>
            </div>
        </div>
    )
}

export default Category