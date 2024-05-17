import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import NewInventory from "./NewInventory";
import { MdFilterList } from "react-icons/md";
import { ProductsData } from "./components/Data";

function Inventory() {
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
        <div className>
          <Overall />
        </div>
        <div>
          <InventoryInfo toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
      <div className="">
        {
          toggle && <NewInventory toggle={toggle} setToggle={setToggle}/>
        }
      </div>
    </div>
  );
}

export default Inventory;

// xxxxxxxx------------------------------------------- Inventory info component --------------------------------------xxxxxxxx


function InventoryInfo({ toggle , setToggle}) {
  const [pageIndex, setPageIndex] = useState(0); 
  const productsPerPage = 10; 
  const startIndex = pageIndex * productsPerPage; 
  const endIndex = (pageIndex + 1) * productsPerPage; 
  const visibleProducts = ProductsData.slice(startIndex, endIndex); 
  const totalPages = Math.ceil(ProductsData.length/productsPerPage);

  const handleNextClick = () =>{
    if(pageIndex < totalPages-1)
      setPageIndex(pageIndex+1); 
  }
  const handlePrevClick = () =>{
    if(pageIndex > 0){
      setPageIndex(pageIndex-1); 
    }
  }


  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Inventory</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn bg-[#1366D9] text-white" onClick={()=>setToggle(!toggle)}>Add Inventory</button>
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Download all</button>
        </div>
      </div>
      <div>
        <table  className="text-[#667085] w-full">
          <tr className="h-10"
           
          >
            <th className="poppins-4 text-sm text-start">Products</th>
            <th className="poppins-4 text-sm text-start">Buying Price</th>
            <th className="poppins-4 text-sm text-start">Quantity</th>
            <th className="poppins-4 text-sm text-start">Threshold Value</th>
            <th className="poppins-4 text-sm text-start">Expiry Date</th>
            <th className="poppins-4 text-sm text-start">Availability</th>
          </tr>
          
          {/* <tr className="poppins-5 text-sm border-t-2 h-10">
            <td><Link to="/inventory/productdetails/">Maggi</Link></td>
            <td>₹430</td>
            <td>43 Packets</td>
            <td>12 Packets</td>
            <td>11/12/22</td>
            <td className="text-[#10A760]">In- stock</td>
          </tr> */}
          {
            visibleProducts.map((prod)=>{
              return (
            <tr className="poppins-5 text-sm border-t-2 h-10">
            <td>{prod.product}</td>
            <td>₹{prod.price}</td>
            <td>{prod.qty} Packets</td>
            <td>{prod.thresholdValue} Packets</td>
            <td>{prod.expiry}</td>
            <td className={`text-sm ${
                prod.avl === 'In-stock' ? 'text-[#10A760]' :
                prod.avl === 'Low stock' ? 'text-[#E19133]' :
                prod.avl === 'Out of stock' ? 'text-[#DA3E33]' : ''
              }`}>{prod.avl}</td>
          </tr>
              )
            })
          }
          
        </table>
      </div>
      <div>
      <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
          <button className="btn" onClick={handlePrevClick}>Previous</button>
          <p className="">Page {pageIndex+1} of {totalPages}</p>
          <button className="btn" onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}



