import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Link } from 'react-router-dom'
import { BSProduct } from './components/Data'
import { BSCategory } from './components/Data'
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { revenueData } from './components/Data';

function Reports() {
  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className={`w-2/12 h-screen`}>
        <Sidebar />
      </div>
      <div className={`w-10/12 flex flex-col gap-3 px-5 overflow-y-auto `}>
        <div className>
          <Navbar />
        </div>
        <div className="flex gap-5 justify-between">
          {/* <Overview /> */}
          <BestSellProduct />
          <BestSellCategory />
        </div>
        <div>
          <Charts />
        </div>
        {/* <div>
          <BestSellProduct />
        </div> */}
      </div>
    </div>
  )
}

export default Reports

// xxxxxxxx------------------------------------------- best selling Product component --------------------------------------xxxxxxxx

function BestSellProduct() {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Best selling product</h1>
        </div>
        <div className="flex gap-3">
          <Link to="productSeeAll">See All</Link>
        </div>
      </div>
      <div>
        <table className="text-[#667085] w-full">
          <tr className="h-10"

          >
            <th className="poppins-4 text-sm text-start">Product</th>
            <th className="poppins-4 text-sm text-start">Product ID</th>
            <th className="poppins-4 text-sm text-start">Turn Over</th>
            <th className="poppins-4 text-sm text-start">Increase By</th>
          </tr>

          {
            BSProduct.slice(0, 4).map(item => {
              return (
                <tr className="poppins-5 text-sm border-t-2 h-10">
                  <td><Link to="/inventory/productdetails/">{item.product}</Link></td>
                  <td>{item.productId}</td>
                  <td>{item.turnOver}</td>
                  <td className="text-[#10A760]">{item.increaseBy}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}
// xxxxxxxx------------------------------------------- best selling category info component --------------------------------------xxxxxxxx


function BestSellCategory() {
  return (
    <div className="w-full bg-white rounded-lg px-5 overflow-y-auto py-4">
      <div className="header flex justify-between items-center">
        <div>
          <h1 className="poppins-5 text-lg py-5">Best selling categories</h1>
        </div>
        <div className="flex gap-3">
          <Link to="categorySeeAll">See All</Link>
        </div>
      </div>
      <div>
        <table className="text-[#667085] w-full">
          <tr className="h-10"

          >
            <th className="poppins-4 text-sm text-start">Category</th>
            <th className="poppins-4 text-sm text-start">Turn Over</th>
            <th className="poppins-4 text-sm text-start">Increase By</th>
          </tr>
          {
            BSCategory.slice(0, 4).map(item => {
              return (
                <tr className="poppins-5 text-sm border-t-2 h-10">
                  <td><Link to="/inventory/productdetails/">{item.category}</Link></td>
                  <td>{item.turnOver}</td>
                  <td className="text-[#10A760]">{item.increaseBy}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}
// xxxxxxxx------------------------------------------------------ Charts component ------------------------------------------------xxxxxxxx

export const Charts = () => {
  return (
      <div className="  w-full justify-center bg-white h-80 p-5">
          <div className="dataCard revenueCard h-full">
              <Line
                  data={{
                      labels: revenueData.map((data) => data.label),
                      datasets: [
                          {
                              label: "Revenue",
                              data: revenueData.map((data) => data.revenue),
                              borderColor: 'orange',
                              backgroundColor: 'orange'
                          },
                          {
                              label: "profit",
                              data: revenueData.map((data) => data.profit),
                              borderColor: 'blue',
                              backgroundColor: 'blue'
                          },
                      ],
                  }}
                  options={{
                      elements: {
                          line: {
                              tension: 0.5
                          },
                          point: {
                              radius: 1.7
                          }
                      },
                      plugins: {
                          title: {
                              display: true,
                              position: 'top',
                              align: 'start',
                              text: "Profit & Revenue",
                              font: {
                                  size: 18,
                                  family: "'Poppins','sans-serif'",
                                  weight: 'normal',

                              },
                              padding: {
                                  top: 10,
                                  bottom: 50
                              },
                          },
                          legend: {
                              display: true,
                              position: 'bottom',
                              labels: {
                                  usePointStyle: true, // Use point style for legend items
                              },
                          },
                      },
                      scales: {
                          y: {
                              grid: {
                                  display: true, // Show grid lines
                                  drawBorder: false, // Hide vertical grid lines
                                  color: '#F0F1F3', // Set color of grid lines
                                  lineWidth: 1, // Set width of grid lines
                                  borderDash: [10, 10], // Set dash pattern for grid lines
                                  zeroLineColor: '#ffffff', // Set color of zero grid line
                              },
                              ticks: {
                                  stepSize: 20000, // Set step size for ticks
                              },
                              min: 20000,
                              max: 80000,
                          },
                          x: {
                              grid: {
                                  display: false, // Hide grid lines
                              },
                          },

                      },

                      maintainAspectRatio: false,
                  }}
              />
          </div>
      </div>
  )
}