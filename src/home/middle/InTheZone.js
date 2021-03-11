import React, { useRef, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { completeZone, setTime, leaveZone } from "../../redux/user"
import CompletedZone from './CompletedZone'
import Timer from './Timer'

const InTheZone = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const userId = useSelector((state) => state.user.entities[0].id)
  const currentZone = useSelector(
    (state) => state.user.entities[0].zones.slice(-1)[0]
  )

  const isInZone = useSelector(state => state.user.inZone)

  console.log(currentZone)

  const handleClick = () => {
    dispatch(leaveZone())
    history.push("/home")
  }


  return (
    <div className="in-zone-div">
      <h1>Currently in Zone</h1>
      <h3>Objective: {currentZone.objective}</h3>
      <h3>Total Expected Zone Time: {currentZone.totalObjectiveTime} minutes</h3>
      <h3>Start Time: {currentZone.zoneStart}</h3>
      <h3>Time Remaining: </h3>
      <h3>Region: {currentZone.region.name}</h3>
      <h3>Trinket being crafted: {currentZone.trinket.name}</h3>
      <button onClick={e => handleClick()}>End Zone</button>
      <Timer />
    </div>
  );
}

export default InTheZone