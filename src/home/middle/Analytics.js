import React from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'primereact/chart'
import { useSpring, animated } from "react-spring"

const Analytics = () => {
      
    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 0
      });

    const currentYear = new Date().getFullYear()

    const userZonesThisYear = useSelector(state => state.user.entities[0].zones.filter(zone => zone.zoneStartYear || zone.zone_start_year === currentYear))

    const tagDataObj = {}
    for (let val of userZonesThisYear) {
        tagDataObj[val.tag.name] = (tagDataObj[val.tag.name] || 0) + 1
    }

    const tagLabels = Object.keys(tagDataObj)
    const tagData = Object.values(tagDataObj)
    
    
    const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const yearlyZoneTimeData = {
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0,
        6 : 0,
        7 : 0,
        8 : 0, 
        9 : 0,
        10 : 0,
        11 : 0
    }

    for (let val of userZonesThisYear) {
      yearlyZoneTimeData[val.zoneStartMonth || val.zone_start_month] =
        (yearlyZoneTimeData[val.zoneStartMonth] ||
          yearlyZoneTimeData[val.zone_start_month] ||
          0) + val.totalObjectiveTime || val.total_objective_time;
    }

    const zoneTimeData = Object.values(yearlyZoneTimeData)
    console.log(userZonesThisYear)
    console.log(yearlyZoneTimeData)
    console.log(zoneTimeData)

    const chartData = {
        labels: tagLabels,
        datasets: [
            {
                label: 'tag count',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#000000',
                pointHoverBackgroundColor: '#000000',
                pointHoverBorderColor: '#000000',
                data: tagData
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
        labels: months,
        datasets: [
            {
                label: 'total minutes',
                backgroundColor: '#ffb199',
                data: zoneTimeData
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
        <animated.div style={fadeIn} className="analytics-div">
            <div className="tag-chart-div p-shadow-8">
                <h1>{currentYear} tag usage</h1>
                <Chart width={'600'} height={'450'} className="tag-chart" type="polarArea" data={chartData}  options={lightOptions} />
            </div>
            <div className="bar-chart-div p-shadow-8">
                <h1>{currentYear} zone time</h1>
                <Chart width={'500'} height={'450'} className="bar-chart" type="bar" data={barChartData} options={basicOptions}/>
            </div>
        </animated.div>
    )
}

export default Analytics