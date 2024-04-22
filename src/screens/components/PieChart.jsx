import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "./revenueData.json"
import { Pie } from 'react-chartjs-2'

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
