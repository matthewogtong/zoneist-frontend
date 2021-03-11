import React from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'primereact/chart'

const Analytics = () => {

    const tagData = useSelector(state => state.user.allTagNames)
    console.log(tagData)

    const chartData = {
        labels: tagData,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            }
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scale: {
            pointLabels: {
                fontColor: '#495057'
            },
            gridLines: {
                color: '#ebedef'
            }
        }
    };

    return (
        <div className="analytics-div">
            <div className="tag-chart-div p-shadow-8">
                <h1>tag data</h1>
                <Chart width={600} height={450} className="tag-chart" type="radar" data={chartData}  />
            </div>
        </div>
    );
    // const tagData = useSelector(state => state.user.allTagNames)
    // console.log(tagData)

    // const tagChartData = {
    //     tags: tagData,
    //     dataset: {
    //         backgroundColor: 'rgba(255,99,132,0.2)',
    //         borderColor: 'rgba(255,99,132,1)',
    //         pointBackgroundColor: 'rgba(255,99,132,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: '#fff',
    //         pointHoverBorderColor: 'rgba(255,99,132,1)',
    //         data: [1, 3, 4, 5, 6, 7, 8, 9, 9, 9]
    //     }
    // }

    // console.log(tagChartData)

    // return (
    //     <div className="analytics-div">
    //         <div className="card">
    //             <Chart type="radar" data={tagChartData} />
    //         </div>
    //     </div>
    // )
}

export default Analytics