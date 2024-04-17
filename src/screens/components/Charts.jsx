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
                            },
                            {
                                label: "profit",
                                data: revenueData.map((data) => data.profit),
                            },
                        ],
                    }}
                    options={{
                        elements: {
                            line: {
                                tension: 0.7
                            },
                            point: {
                                radius: 0
                            }
                        },
                        plugins: {
                            title:{
                                display : true,
                                position : 'top',
                                align : 'start',
                                text : "Profit & Revenue",
                                font : {
                                    size: 20,
                                    
                                },
                                padding: 20,
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
                                    stepSize: 10000, // Set step size for ticks
                                },
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
