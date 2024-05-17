import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import PlaceOrder from "./PlaceOrder";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import { OrdersData } from "./components/Data";

function Orders() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen  ${toggle ? 'opacity-50' : ''}`}>
        <Sidebar />
      </div>
      <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto ${toggle ? 'opacity-50' : ''}`}>
        <div className>
          <Navbar />
        </div>
        <div>
          <Overall />
        </div>
        <div>
          <Order toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
      <div>
        {
          toggle && <PlaceOrder toggle={toggle} setToggle={setToggle}/>
        }
      </div>
    </div>
  );
}

export default Orders

// xxxxxxxx------------------------------------------- Order info component --------------------------------------xxxxxxxx

function Order({ toggle, setToggle }) {
  const [pageIndex, setPageIndex] = useState(0);
  const entryPerPage = 10;
  const startIndex = pageIndex * entryPerPage;
  const endIndex = (pageIndex + 1) * entryPerPage;
  const visibleOrders = OrdersData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(OrdersData.length / entryPerPage);

  const handleNextBtn = () => {
    if (pageIndex < totalPages - 1)
      setPageIndex(pageIndex + 1)
  }
  const handlePrvBtn = () => {
    if (pageIndex > 0)
      setPageIndex(pageIndex - 1)
  }

  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Orders</h1>
        </div>
        <div className="flex gap-3">
          <button
            className="btn bg-[#1366D9] text-white"
            onClick={() => setToggle(!toggle)}
          >
            Place Order
          </button>
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Order History</button>
        </div>
      </div>
      <div>
        <table className="text-[#667085] w-full">
          <tr className="h-10">
            <th className="poppins-4 text-sm text-start">Products</th>
            <th className="poppins-4 text-sm text-start">Order Value</th>
            <th className="poppins-4 text-sm text-start">Quantity</th>
            <th className="poppins-4 text-sm text-start">Order ID</th>
            <th className="poppins-4 text-sm text-start">Expected Delivery</th>
            <th className="poppins-4 text-sm text-start">Status</th>
          </tr>

          {visibleOrders.map((order) => {
            return (
              <tr className="poppins-5 text-sm border-t-2 h-10">
                <td>
                  <Link to="/inventory/productdetails/">
                    {order.productName}
                  </Link>
                </td>
                <td>{order.orderValue}</td>
                <td>{order.qty}</td>
                <td>{order.orderId}</td>
                <td>{order.expectedDelivery}</td>
                <td
                  className={`${order.status == "Delayed"
                    ? "text-[#F79009]"
                    : order.status == "Confirmed"
                      ? "text-[#1570EF]"
                      : order.status == "Returned"
                        ? "text-[#667085]"
                        : "text-[#10A760]"
                    }`}
                >
                  {order.status}
                </td>
              </tr>
            );
          })}

        </table>
      </div>
      <div>
        <div className="flex  justify-between pt-3 poppins-5 text-sm text-[#48505E]">
          <button className="btn" onClick={handlePrvBtn}>Previous</button>
          <p className="">Page {pageIndex + 1} of {totalPages}</p>
          <button className="btn" onClick={handleNextBtn}>Next</button>
        </div>
      </div>
    </div>
  );
}
