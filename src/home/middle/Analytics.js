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
                label: 'tag count',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#000000',
                pointHoverBackgroundColor: '#000000',
                pointHoverBorderColor: '#000000',
                data: [9, 3, 1, 5, 1, 1, 0, 0, 2, 1]
            }
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#000000'
            }
        },
        scale: {
            pointLabels: {
                fontColor: '#000000'
            },
            gridLines: {
                color: '#000000'
            }
        }
    }

    const barChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'week of 3/8/2021',
                backgroundColor: '#ffb199',
                data: [630, 600, 660, 260, 0, 0, 0]
            }
        ]
    }

    const getLightTheme = () => {
        let basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        }

        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();


    return (
        <div className="analytics-div">
            <div className="tag-chart-div p-shadow-8">
                <h1>all time tag usage</h1>
                <Chart width={'600'} height={'450'} className="tag-chart" type="polarArea" data={chartData}  options={lightOptions} />
            </div>
            <div className="bar-chart-div p-shadow-8">
                <h1>weekly zone time</h1>
                <Chart width={'500'} height={'450'} className="bar-chart" type="bar" data={barChartData} options={basicOptions}/>
            </div>
        </div>
    );
}

export default Analytics