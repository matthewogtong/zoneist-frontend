import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { completeZone } from "../../redux/user"
import Countdown from 'react-countdown'
import CompletedZone from './CompletedZone'

const InTheZone = () => {
    const history = useHistory()

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)
    const currentZone = useSelector(state => state.user.entities[0].zones.slice(-1)[0])
    
    const handleClick = () => {
        history.push("/home")
    }

    console.log(currentZone)
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        dispatch(completeZone(currentZone))
        console.log(currentZone)
        fetch(`http://localhost:3001/users/${userId}/zones/${currentZone.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            isActive: false,
            isComplete: true
          })
        })
          .then(r => r.json())
          .then(data => console.log(data))
        return <CompletedZone />
      } else {
        return <span>{hours}:{minutes}:{seconds}</span>
      }
    }

    const totalCountdownMilliseconds = currentZone.totalObjectiveTime * 60000

    return (
      <div className="in-zone-div">
        <h1>Currently in Zone</h1>
        <h3>Objective: {currentZone.objective}</h3>
        <h3>Total Expected Zone Time: {currentZone.totalObjectiveTime} minutes</h3>
        <h3>Start Time: {currentZone.zoneStart}</h3>
        <Countdown 
          date={Date.now() + totalCountdownMilliseconds}
          renderer={renderer}
        />
        <h3>Time Remaining: </h3>
        <h3>Region: {currentZone.region.name}</h3>
        <h3>Trinket being crafted: {currentZone.trinket.name}</h3>
        <button onClick={e => handleClick()}>End Zone</button>
      </div>
    );
}

export default InTheZone