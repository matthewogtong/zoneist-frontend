import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Task } from '../../svg/nontrinkets/task.svg'

const TotalZoneTime = () => {

  const userZones = useSelector(state => state.user.zonesToDisplay)
  const calendarInfo = useSelector(state => state.user.calendar)

  const totalTimeToDisplay = () => {
    let result = 0
    userZones.forEach((zone) => {
      if (zone.isComplete && !zone.isActive) {
        if (
          zone.zoneStartDate === calendarInfo.date &&
          zone.zoneStartMonth === calendarInfo.month &&
          zone.zoneStartYear === calendarInfo.year
        ) {
          result += zone.totalObjectiveTime
        }
      }
    })
    return result
  }

  return (
    <div className="total-zone-time">
      <p>date's total time zone:</p>
      <p><Task className="task-svg"/>{totalTimeToDisplay()} mins</p>
    </div>
  )
}

export default TotalZoneTime