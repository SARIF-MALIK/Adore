import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
// import revenueData from "./revenueData.json"
import { revenueData } from './Data';


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
export default BarChart 