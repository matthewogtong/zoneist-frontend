import React from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import Countdown from 'react-countdown'

const InTheZone = () => {
    const history = useHistory()

    const currentZone = useSelector(state => state.user.entities[0].zones.slice(-1)[0])
    
    const handleClick = () => {
        history.push("/home")
    }

    const Completionist = () => {
      return (
        <span>you completed your zone!</span>
      )
    }
    
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completionist />
      } else {
        return <span>{hours}:{minutes}:{seconds}</span>
      }
    }

    const totalCountdownMilliseconds = currentZone.totalObjectiveTime * 1000
    console.log(totalCountdownMilliseconds)

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