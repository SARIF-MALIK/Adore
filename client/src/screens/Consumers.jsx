import React, { useState,useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AddConsumers from './components/AddConsumers'
import { Link } from 'react-router-dom'
import axios from 'axios';

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

// xxxxxxxx------------------------------------------- consumer info component --------------------------------------xxxxxxxx

const ConsumerInfo = ({ toggle, setToggle }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [ConsumerData, setConsumerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    const ConsumerPerPage = 10;
    const startIndex = pageIndex * ConsumerPerPage;
    const endIndex = (pageIndex + 1) * ConsumerPerPage;
    const VisibleProduct = ConsumerData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ConsumerData.length / ConsumerPerPage);
    
    const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get('http://localhost:8080/api/v1/consumer/getall-consumer');
          setConsumerData(res.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;


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
                <div className="flex gap-3">
                    <button
                        className="btn bg-[#1366D9] text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        Add Consumer
                    </button>
                </div>
            </div>
            <div>
                <table className="text-[#667085] w-full">
                    <tr className="h-10"
                    >
                        <th className="poppins-4 text-sm text-start">Consumer name</th>
                        <th className="poppins-4 text-sm text-start">Product </th>
                        <th className="poppins-4 text-sm text-start">Quantity picked</th>
                        <th className="poppins-4 text-sm text-start">Punched by</th>
                    </tr>

                    {
                        VisibleProduct.map(item => {
                            return (
                                <tr className="poppins-5 text-sm border-t-2 h-10">
                                    <td><Link to="/inventory/productdetails/">{item.consumerName}</Link></td>
                                    <td>{item.product.productName}</td>
                                    <td>{item.qty}</td>
                                    <td className="text-[#10A760]">{item.punchedBy.email}</td>
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