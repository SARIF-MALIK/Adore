import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "./revenueData.json"

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
                            title:{
                                display : true,
                                position : 'top',
                                align : 'start',
                                text : "Profit & Revenue",
                                font : {
                                    size: 18,
                                    family : "'Poppins','sans-serif'",
                                    weight : 'normal',
                                    
                                },
                                padding: {
                                    top: 10,
                                    bottom: 50
                                },
                            },
                            legend: {
                                display : true, 
                                position : 'bottom',
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
