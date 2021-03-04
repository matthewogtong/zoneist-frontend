import React from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

const InTheZone = () => {
    const history = useHistory()

    const currentZone = useSelector(state => state.user.entities[0].zones.slice(-1)[0])
    
    const handleClick = () => {
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
        <h3>Trinket being crafted</h3>
        <button onClick={e => handleClick()}>End Zone</button>
      </div>
    );
}

export default InTheZone