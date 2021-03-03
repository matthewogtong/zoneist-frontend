import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

const Greeting = () => {

    const username = useSelector(state => state.user.entities[0].username)

    const [greeting, setGreeting] = useState("")

    // TIME
    const today = new Date()
    const currentHour = today.getHours()
    
    useEffect(() => {
      if (currentHour < 12) {
        setGreeting("Good Morning")
      } else if (currentHour < 18 ){
        setGreeting("Good Afternoon")
      } else {
        setGreeting("Good Evening")
      }
    }, [currentHour])
    

    return (
      <div className="home-greeting">
        <h2>{greeting},</h2>
        <h2>{username}</h2>
      </div>
    );
}
export default Greeting