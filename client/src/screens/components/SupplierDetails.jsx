import React, { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SupplierDetails = () => {
  const [toggle, setToggle] = useState(false);
  const [supplierData, setSupplierData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedSupplierData, setEditedSupplierData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); 

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/supplier/data-supplier/${id}`
      );
      setSupplierData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function toCamelCase(str) {
    return str
      .replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^./, str[0].toUpperCase());
  }

  // editing functions ---------------x x x x ---------------x  xx x x x =========x x  xx xx  ----------------
  const handleEdit = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
      setEditedSupplierData({ ...supplierData }); // Make a copy of the original data
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the field is "category", split the value by comma
  const updatedValue = name === "categoryArr" ? value.trim().split(",") : value;
  setEditedSupplierData((prevFormData) => ({
    ...prevFormData,
    [name]: updatedValue.toLowerCase(),
  }));
  };
  
  const handleFileChange = async (file) => {

  }
  const handleSubmit = async () => {
    try {
      await axios.patch(
        `http://localhost:8080/api/v1/supplier/edit-supplier/${id}`,
        editedSupplierData
      );
      setSupplierData(editedSupplierData);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }finally{
        navigate('/suppliers'); 
      }
  };

  const handleDelete = async()=>{
    try {
        await axios.delete(
          `http://localhost:8080/api/v1/supplier/delete-supplier/${id}`
        );
      } catch (error) {
        console.log(error);
      }finally{
        navigate('/suppliers'); 
      }
  }

  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen ${toggle ? "opacity-50" : ""}`}>
        <Sidebar />
      </div>
      <div
        className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto ${
          toggle ? "opacity-50" : ""
        }`}
      >
        <div>
          <Navbar />
        </div>
        <div>
          {supplierData ? (
            <div className="w-full bg-white rounded-lg px-5 py-4">
              <div className="header flex justify-between items-center">
                <div>
                  <h1 className="poppins-5 text-lg py-5">
                    {supplierData.supplierName.toUpperCase()}
                  </h1>
                </div>
                <div className="flex gap-3">
                  {!editMode ? (
                    <button
                      className="btn flex items-center justify-center gap-2"
                      onClick={handleEdit}
                    >
                      {" "}
                      <FiEdit2 size={22} />
                      Edit
                    </button>
                  ) : (
                    <button
                      className="btn flex items-center justify-center gap-2"
                      onClick={handleEdit}
                    >
                      {" "}
                      Cancel Edit
                    </button>
                  )}
                  <button className="btn" onClick={handleDelete}>Delete</button>
                </div>
              </div>
              <div>
                <div className="border-b-2 h-16 poppins-4 text-[16px] text-[#48505E]">
                  <ul className="flex ">
                    <li className="m-5">Overview</li>
                    <li className="m-5">Purchases</li>
                    <li className="m-5">Adjustments</li>
                    <li className="m-5">History</li>
                  </ul>
                </div>
                {/* Edit MODE -------- Edit MODE -------- Edit MODE ------- Edit MODE --------- Edit MODE -------- Edit MODE */}
                {editMode ? (
                  <div>
                    <div className="my-5 px-5">
                      <div className="flex justify-between mr-10">
                        <div className="min-w-[450px] flex flex-col gap-10">
                          <div className="">
                            <h1 className="poppins-6 text-[16px] text-[#48505E]">
                              Supplier Details
                            </h1>
                            <table className="min-w-[560px] text-[#858D9D] poppins-5">
                              <tr className="h-10">
                                <td>Supplier name</td>
                                <td className="text-[#5D6679]">
                                  <input
                                    type="text"
                                    name="supplierName"
                                    value={editedSupplierData.supplierName}
                                    onChange={handleChange}
                                  />
                                </td>
                              </tr>
                              {/* <tr className="h-10">
                                <td>Product</td>
                                <td className="text-[#5D6679]">
                                  <input
                                    type="text"
                                    name="product"
                                    value={editedSupplierData.product? editedSupplierData.product : "Kitkat"}
                                    onChange={handleChange}
                                  />
                                </td>
                              </tr> */}
                              <tr className="h-10">
                                <td>Contact No.</td>
                                <td className="text-[#5D6679]">
                                  <input
                                    type="text"
                                    name="contact"
                                    value={editedSupplierData.contact}
                                    onChange={handleChange}
                                  />
                                </td>
                              </tr>
                              <tr className="h-10">
                                <td>Email</td>
                                <td className="text-[#5D6679]">
                                  <input
                                    type="email"
                                    name="email"
                                    value={editedSupplierData.email}
                                    onChange={handleChange}
                                  />
                                </td>
                              </tr>
                              {/* <tr className="h-10">
                                <td>Product category</td>
                                <td className="text-[#5D6679]">
                                  <input
                                    type="text"
                                    name="category"
                                    value={editedSupplierData.category.map(item => item.category).join(', ')}
                                    onChange={handleChange}
                                  />
                                </td>
                              </tr> */}
                            </table>
                          </div>
                        </div>
                        <div className="min-w-56 flex flex-col items-center">
                          <div className="drag w-[150px] h-[150px] border-2 border-dashed rounded-lg p-2 border-[#9D9D9D]">
                            <input type="file" onChange={handleFileChange} />
                          </div>
                          <div className="">
                            <h3 className="text-center poppins-6 text-[16px] text-[#48505E] mt-10">
                              Address
                            </h3>
                            <p className="  ">
                              <input
                                type="text"
                                name="address"
                                value={editedSupplierData.address}
                                onChange={handleChange}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-5">
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                ) : (
                    
                  <div className="my-5 px-5 ">                        
                    <div className="flex justify-between mr-10">
                      <div className="min-w-[450px] flex flex-col gap-10">
                        <div className="">
                          <h1 className="poppins-6 text-[16px] text-[#48505E]">
                            Supplier Details
                          </h1>
                          <table className="min-w-[560px] text-[#858D9D] poppins-5">
                            <tr className="h-10">
                              <td>Supplier name</td>
                              <td className="text-[#5D6679]">
                                {toCamelCase(supplierData.supplierName)}
                              </td>
                            </tr>
                            <tr className="h-10">
                              <td>Product </td>
                              <td className="text-[#5D6679]">Kitkat</td>
                            </tr>
                            <tr className="h-10">
                              <td>Contact No. </td>
                              <td className="text-[#5D6679]">
                                {supplierData.contact}
                              </td>
                            </tr>
                            <tr className="h-10">
                              <td>Email </td>
                              <td className="text-[#5D6679]">
                                {supplierData.email}
                              </td>
                            </tr>
                            <tr className="h-10">
                              <td>Product category</td>
                              <td className="text-[#5D6679]">
                                {supplierData.category
                                  .map((item) => item.category)
                                  .join(", ")}
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="min-w-56 flex flex-col items-center">
                        <div className="drag w-[150px] h-[150px] border-2 border-dashed rounded-lg p-2 border-[#9D9D9D]">
                          <img
                            src={supplierData.supplierImg}
                            alt="supplier img"
                          />
                        </div>
                        <div className="">
                          <h3 className="text-center poppins-6 text-[16px] text-[#48505E] mt-10">
                            Address
                          </h3>
                          <p className="  ">
                            Suite 200 1742 Rippin Mall, Lake Charlatown, NE
                            56301
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierDetails;
