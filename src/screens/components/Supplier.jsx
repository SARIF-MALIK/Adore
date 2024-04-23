import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import { SuppliersData } from "./Data";

function Supplier({ toggle, setToggle }) {
  const [pageIndex, setPageIndex] = useState(0);
  const suppliersPerPage = 10;
  const startIndex = pageIndex * suppliersPerPage;
  const endIndex = (pageIndex + 1) * suppliersPerPage;
  const visibleSuppliers = SuppliersData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(SuppliersData.length / suppliersPerPage);

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
          <h1 className="poppins-5 text-lg py-5">Suppliers</h1>
        </div>
        <div className="flex gap-3">
          <button
            className="btn bg-[#1366D9] text-white"
            onClick={() => setToggle(!toggle)}
          >
            Add Supplier
          </button>
          <button className="btn flex items-center justify-center gap-2">
            {" "}
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Download all</button>
        </div>
      </div>
      <div>
        <table className="text-[#667085] w-full">
          <tr className="h-10">
            <th className="poppins-4 text-sm text-start">Supplier Name</th>
            <th className="poppins-4 text-sm text-start">Product</th>
            <th className="poppins-4 text-sm text-start">Contact Number</th>
            <th className="poppins-4 text-sm text-start">Email</th>
            <th className="poppins-4 text-sm text-start">Type</th>
            <th className="poppins-4 text-sm text-start">On the way</th>
          </tr>
          {visibleSuppliers.map((supplier) => {
            return (
              <tr className="poppins-5 text-sm border-t-2 h-10">
                <td>
                  <Link to="/inventory/productdetails/">
                    {supplier.supplierName}
                  </Link>
                </td>
                <td>{supplier.product}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.email}</td>
                <td className={`${supplier.type == 'Taking Return' ? 'text-[#10A760]' : supplier.type == 'Not Taking Return' ? 'text-[#DA3E33]' : ""}`}
                
                >{supplier.type}</td>
                <td>
                  {supplier.stockInTransit ? supplier.stockInTransit : "-"}
                </td>
              </tr>
            );
          })}
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
  );
}

export default Supplier;
