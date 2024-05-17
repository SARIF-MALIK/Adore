import React, { useRef, useState } from 'react'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overall from "./components/Overall";
import { FaUsers, FaClipboardList, FaComment } from "react-icons/fa";
import { revenueData } from "./components/Data";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Pie } from 'react-chartjs-2'
import { useGLTF } from '@react-three/drei'  // load 3d model
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

function Dashboard() {
  return (
    <div className="w-screen h-screen flex bg-[#F0F1F3] relative">
      <div className="w-2/12 h-full">
        <Sidebar />
      </div>
      <div className="w-10/12 flex flex-col gap-3 px-5 overflow-y-auto">
        {/* <Navbar /> */}
        <div>
          <DashContent />
        </div>
        {/* <Overall /> */}
        <div className="flex justify-center bg-white rounded-lg">
          <div className="w-[50%] h-80 bg-white rounded-lg">
            <BarChart />
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex justify-center bg-white w-1/2  rounded-lg h-80">
            <div className="bg-white">
              <PieChart />
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-lg mb-3 h-80">
            <ThreeD />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// xxxxxxxx------------------------------------------- Dash Content component --------------------------------------xxxxxxxx

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

// xxxxxxxx------------------------------------------- Bar chart component --------------------------------------xxxxxxxx
const BarChart = () => {
  return (
    <Bar
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          {
            label: "Revenue",
            data: revenueData.map((data) => data.revenue),
            // borderColor: 'orange',
            // backgroundColor: 'orange'
          },
          {
            label: "profit",
            data: revenueData.map((data) => data.profit),
            // borderColor: 'blue',
            // backgroundColor: 'blue'
          },
        ],
      }}
      options={{
        // elements: {
        //   line: {
        //     tension: 0.5
        //   },
        //   point: {
        //     radius: 1.7
        //   }
        // },
        plugins: {
          title: {
            display: true,
            text: "Profit & Revenue",
            padding: {
              top: 10,
              bottom: 50
            },
            // align: 'start',
            font: {
              size: 20,
              weight: 'bold',

            }
          },
          legend: {
            // display: true,
            position: 'bottom',
            // labels: { usePointStyle: true },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            border: {
              display: false,
            },
            min: 20000,
            max: 80000,
            ticks: {
              // forces step size to be 50 units
              stepSize: 20000
            },
          },
          maintainAspectRatio: false,
        }


      }}
    />
  )
}

// xxxxxxxx------------------------------------------- Pie chart component --------------------------------------xxxxxxxx

export const PieChart = () => {
  return (
      <Pie
          data={{
              labels: ['Household', 'Vegetables', 'InstantFoods'],
              // labels: revenueData.map((data) => data.label),
              datasets: [
                  {
                      // label: "Revenue",
                      data: [20, 20, 60],
                      // data: revenueData.map((data) => data.revenue),
                      // borderColor: 'orange',
                      // backgroundColor: 'orange'
                  },
              ],
          }}
          options={{
              // elements: {
              //   line: {
              //     tension: 0.5
              //   },
              //   point: {
              //     radius: 1.7
              //   }
              // },
              plugins: {
                  title: {
                      display: true,
                      text: "Profit & Revenue",
                      padding: {
                          top: 10,
                          bottom: 50
                      },
                      // align: 'start',
                      font: {
                          size: 20,
                          weight: 'bold',

                      }
                  },
                  legend: {
                      // display: true,
                      position: 'bottom',
                      // labels: { usePointStyle: true },
                  },
              },
              scales: {
                  x: {
                      display: false,
                  },
                  y: {
                      display: false,

                  }
              }


          }}
      />
  )
}

// xxxxxxxx------------------------------------------- ThreeD (3D) component --------------------------------------xxxxxxxx


function ThreeD() {
  return (
        <Canvas  style={{ position: 'relative', width: '100%', height: '150%', overflow:"visible"}}>
            <Model/>
            <Environment preset='sunset'/>
            {/* <OrbitControls/> */}
            <OrbitControlsEnabled/>
        </Canvas>
  )
}

export function Model() {
  const model = useGLTF("/assets/statChart.glb")
  const cubeRef = useRef()
  useFrame((state, delta)=>{
      cubeRef.current.rotation.y -= 0.01
  })
  return (
      <mesh ref={cubeRef} scale={[3, 3, 3]}>
          <primitive object={model.scene}/>
      </mesh>
  )
}


function OrbitControlsEnabled() {
const { camera } = useThree();
const initialPosition = { x: 5, y: 4, z: 10 };
const [enableControls, setEnableControls] = useState(false);

// Set initial camera position
camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);

// Enable controls after initial rendering
setTimeout(() => {
  setEnableControls(true);
}, 1000);

return enableControls && <OrbitControls />;
}