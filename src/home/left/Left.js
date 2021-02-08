import React from 'react'
import NavBar from './NavBar'
import TotalZoneTime from './TotalZoneTime'

const Left = () => {
    return (
        <div className="home-left p-shadow-8">
            <NavBar />
            <TotalZoneTime />
        </div>
    )
}

export default Left