import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import Newsupplier from "./components/Newsupplier";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

function Suppliers() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen ${toggle? 'opacity-50' : '' }`}>
        <Sidebar />
      </div>
      <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto ${toggle? 'opacity-50' : '' }`}>
        <div className>
          <Navbar />
        </div>
        <div className>
          <Overall />
        </div>
        <div>
            <Supplier toggle={toggle} setToggle={setToggle}/>
        </div>
      </div>
   
      <div className="">
      {
        toggle && <Newsupplier toggle={toggle} setToggle={setToggle}/> 
      }
      </div>
    </div>
  );
}

export default Suppliers;

// xxxxxxxx------------------------------------------- supplier info component --------------------------------------xxxxxxxx

function Supplier({ toggle, setToggle }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [suppliersData, setSuppliersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const suppliersPerPage = 10;

  const startIndex = pageIndex * suppliersPerPage;
  const endIndex = (pageIndex + 1) * suppliersPerPage;
  const visibleSuppliers = suppliersData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(suppliersData.length / suppliersPerPage);

  const handleNextClick = () => {
    if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
  };

  const handlePrevClick = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8080/api/v1/supplier/data-supplier');
      setSuppliersData(res.data);
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
            <MdFilterList size={22} />
            Filters
          </button>
          <button className="btn">Download all</button>
        </div>
      </div>
      <div>
        <table className="text-[#667085] w-full">
          <thead>
            <tr className="h-10">
              <th className="poppins-4 text-sm text-start">Supplier Name</th>
              <th className="poppins-4 text-sm text-start">Category</th>
              <th className="poppins-4 text-sm text-start">Contact Number</th>
              <th className="poppins-4 text-sm text-start">Email</th>
              <th className="poppins-4 text-sm text-start">Type</th>
              <th className="poppins-4 text-sm text-start">On the way</th>
            </tr>
          </thead>
          <tbody>
            {visibleSuppliers.map((supplier) => (
              <tr className="poppins-5 text-sm border-t-2 h-10" key={supplier.id}>
                <td>
                  <Link to={`/supplierDetails/${supplier._id}`}>
                    {supplier.supplierName}
                  </Link>
                </td>
                <td>{supplier.category.map(cat => cat.category).join(', ')}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.email}</td>
                <td className={`${supplier.type === 'Taking Return' ? 'text-[#10A760]' : supplier.type === 'Not Taking Return' ? 'text-[#DA3E33]' : ""}`}>
                  {supplier.type}
                </td>
                <td>
                  {"-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex justify-between pt-3 poppins-5 text-sm text-[#48505E]">
          <button className="btn hover:cursor-pointer" onClick={handlePrevClick} disabled={pageIndex === 0}>
            Previous
          </button>
          <p className="">
            Page {pageIndex + 1} of {totalPages}
          </p>
          <button className="btn hover:cursor-pointer" onClick={handleNextClick} disabled={pageIndex === totalPages - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}