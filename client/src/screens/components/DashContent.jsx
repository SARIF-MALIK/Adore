import React from "react";
import { FaUsers, FaClipboardList, FaComment } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'


function DashContent() {
  // Sample data for the pie chart
  const data = {
    labels: ['Admin', 'Editor', 'Subscriber'],
    datasets: [
      {
        data: [30, 20, 50], // Sample percentages
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="container max-w-full bg-white p-5 rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Users */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <FaUsers className="text-3xl text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Total Products</h3>
            <p className="text-gray-600">1000</p>
          </div>
        </div>

        {/* Total Posts */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <FaClipboardList className="text-3xl text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <p className="text-gray-600">500</p>
          </div>
        </div>

        {/* Total Comments */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center">
          <div className="mr-4">
            <FaComment className="text-3xl text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Value</h3>
            <p className="text-gray-600">2000</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashContent;
