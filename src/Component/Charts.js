import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

export default function Charts({ value }) {
    const [arrayValues, setArrayValues] = useState([])
    const [indexes, setIndexes] = useState([])

    useEffect(() => {
        setArrayValues(arrayValues => [...arrayValues, value]);
    }, [value])

    useEffect(() => {
        setIndexes(indexes => [...indexes, arrayValues.length])

    }, [arrayValues])
    return (
        <div className="charts">
            <Bar
                width={80}
                height={10}
                options={{
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {

                                zeroLineColor: 'white',
                                color: 'transparent',
                                drawOnChartArea: false
                            },
                            ticks: {
                                display: false
                            },
                            scaleLabel: {

                                display: false,
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                zeroLineColor: 'white',
                                color: 'transparent',
                                drawOnChartArea: false
                            },
                            ticks: {
                                display: false
                            },
                            scaleLabel: {

                                display: false,

                            }
                        }]
                    },
                    legend: {
                        display: false
                    }
                }}
                data={{
                    labels: indexes,
                    datasets: [
                        {
                            borderSkipped: false,

                            borderWidth: 2,
                            data: arrayValues,
                            backgroundColor: 'rgba(0, 0, 255, 0.5)',
                        },
                    ],
                }}
            />
        </div>
    )
}
