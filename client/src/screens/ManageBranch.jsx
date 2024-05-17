import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { MdDelete } from "react-icons/md";
import { branchData } from "./components/Data";
function ManageBranch() {
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
        <div>
          <Branch toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
      <div>
        {
          toggle && <AddStore />
        }
      </div>
    </div>
  );
}

export default ManageBranch

const Branch = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="w-full bg-white rounded-lg float-right py-5">
        <div className=" ml-5 mb-16">
          <h1 className="float-left text-lg font-medium text-[#383E49]">
            Manage Branch
          </h1>
          <button class="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded float-right mr-4 text-sm" onClick={() => setToggle(!toggle)}>
            Add Store
          </button>
        </div>
        {branchData.map((branch) => {
          return (
            <div class="w-10/12 ml-10 mt-10 bg-white rounded-lg relative">
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full h-40"
              >
                <div class="relative w-full md:w-64 h-96 md:h-40">
                  <img
                    class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg bg-slate-100 text-center"
                    src={branch.branchImg}
                    alt="branch name"
                  />
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-xl tracking-tight text-[#5D6679] poppins-5">
                    {branch.branchName}
                  </h5>
                  <p class="mb-3 text-gray-700 dark:text-gray-400 poppins-4">
                    {branch.address}
                  </p>
                  <p class="mb-3 text-gray-700 dark:text-gray-400 poppins-4">
                    {branch.state} - {branch.pin}
                  </p>
                  <p class="mb-3 text-gray-700 dark:text-gray-400 poppins-4">
                    {branch.contact}
                  </p>
                </div>
                <button class="absolute top-4 right-4 bg-white hover:bg-gray-100 text-blue-500 font-semibold py-1 px-6 border border-gray-400 rounded shadow mr-14 ml-auto">
                  Edit
                </button>
                <button class="absolute top-4 right-4 bg-white hover:bg-gray-100 text-red-500 font-semibold py-2 px-3 border border-gray-400 rounded shadow">
                  <MdDelete />
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AddStore = () => {
  return (
      <form id="form" action="" className='absolute left-[40%]'>
          <div className=" flex justify-center items-center rounded-lg h-screen top-[122px] left-96">
              <div className="w-full p-6 shadow-lg bg-white rounded-md">
                  <h1 className=" w-32 h-8 font-medium" htmlFor="">Add Store</h1>
                  <div className="flex-1 justify-center items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                      <div className="relative ">
                          <div className="items-center flex justify-center max-w-xl mx-auto">
                              <label className="flex justify-center mr-4 w-20 h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                                  <input type="file" name="" className="hidden" accept="image/png,image/jpeg" id="input" />
                              </label>
                          </div>
                      </div>
                      <span className="text-sm text-gray-600">Drop image here <span className="flex justify-center">or</span><span className="text-blue-600 text-sm ml-[4px] justify-centre ">Browse image</span></span>
                  </div>
                  <div className="mt-4 mb-7">
                      <label for="name" className=" text-base mb-2">Branch name </label>
                      <input type="text" id="username" className=" float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Branch name" />
                  </div>
                  <div className="mt-3 mb-7">
                      <label for="address" className=" text-base mb-2">Address</label>
                      <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter your Address" />
                  </div>
                  <div className="mt-3 mb-7">
                      <label for="state" className=" text-base mb-2">State </label>
                      <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter State" />
                  </div>
                  <div className="mt-3 mb-7">
                      <label for="pin" className=" text-base mb-2">Pincode</label>
                      <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Pin" />
                  </div>
                  <div className="mt-3 mb-7">
                      <label for="username" className=" text-base mb-2">Contact no. </label>
                      <input type="text" id="username" className="float-right ml-6 border rounded-lg text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Your Contact no" />
                  </div>

                  <div className="mt-5">
                      <button type="submit" className="border-2 border-indigo-500 bg-[#1366D9] text-white py-1 rounded float-right w-32"><span className="text-sm">Add Store</span></button>
                      <button type="" className="border-2 border-500  text-grey py-1 rounded float-right mr-4 w-32 ">Discard</button>
                  </div>
              </div>
          </div>
      </form>
  )
}