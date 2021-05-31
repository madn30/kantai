import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

export default function Charts({ value }) {
    const [arrayvalues, setArrayvalues] = useState([])
    const [indexes, setIndexes] = useState([])

    useEffect(() => {
        setArrayvalues(arrayvalues => [...arrayvalues, value]);
    }, [value])

    useEffect(() => {
        setIndexes(indexes => [...indexes, arrayvalues.length])
        console.log(indexes);

    }, [arrayvalues])
    return (
        <div className="charts">
            <Bar
                width={100}
                height={50}
                options={{
                    scales: {

                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false
                            },
                            ticks: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                drawOnChartArea: false
                            },
                            ticks: {
                                display: false
                            },
                            scaleLabel: {

                                display: false,
                                labelString: "Normalized/Indexed Data",
                            }
                        }]
                    }, legend: {
                        display: false
                    }

                }}

                data={{
                    labels: indexes,


                    datasets: [
                        {

                            data: arrayvalues,
                            backgroundColor: 'rgb(189, 213, 0)',


                        },
                    ],

                }}

            />
        </div>
    )
}
