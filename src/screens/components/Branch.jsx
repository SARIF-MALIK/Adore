import React from "react";
import { MdDelete } from "react-icons/md";
import { branchData } from "./Data";

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

export default Branch;
