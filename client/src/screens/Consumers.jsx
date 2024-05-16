import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import ConsumerInfo from './components/ConsumerInfo'
import AddProduct from './components/AddProduct'
import AddConsumers from './components/AddConsumers'

const Consumers = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
            <div className={`w-2/12 h-screen ${toggle ? 'opacity-50' : ''}`}>
                <Sidebar />
            </div>
            <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto `}>
                <div className>
                    <Navbar />
                </div>
                <div className>
                    <ConsumerInfo toggle={toggle} setToggle={setToggle} />
                </div>
            </div>
            <div>
                {
                    toggle && <AddConsumers toggle={toggle} setToggle={setToggle}  />
                }
            </div>
        </div>
    )
}

export default Consumers