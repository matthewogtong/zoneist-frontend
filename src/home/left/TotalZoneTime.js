import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Task } from '../../svg/nontrinkets/task.svg'

const TotalZoneTime = () => {

  const userZones = useSelector(state => state.user.entities[0].zones)
  const todayInfo = useSelector(state => state.user.today)
  console.log(userZones)
  console.log(todayInfo)

  const totalTimeToDisplay = () => {
    let result = 0
    userZones.forEach((zone) => {
      if (zone.isComplete && !zone.isActive) {
        if (
          zone.zoneStartDate === todayInfo.date &&
          zone.zoneStartMonth === todayInfo.month &&
          zone.zoneStartYear === todayInfo.year
        ) {
          result += zone.totalObjectiveTime
        }
      }
    })
    return result
  }

  console.log(totalTimeToDisplay())

  return (
    <div className="total-zone-time">
      <p>today's total time zone:</p>
      <p><Task className="task-svg"/>{totalTimeToDisplay()} mins</p>
    </div>
  )
}

export default TotalZoneTime