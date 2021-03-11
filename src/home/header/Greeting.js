import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { ReactComponent as Sun } from "../../svg/nontrinkets/sun.svg"
import { ReactComponent as Moon } from "../../svg/nontrinkets/moon.svg"

const Greeting = () => {

    const username = useSelector(state => state.user.entities[0].username)

    const [greeting, setGreeting] = useState("")

    // TIME
    const today = new Date()
    const currentHour = today.getHours()
    
    useEffect(() => {
      if (currentHour < 12) {
        setGreeting("good morning")
      } else if (currentHour < 18 ){
        setGreeting("good afternoon")
      } else {
        setGreeting("good evening")
      }
    }, [currentHour])
    

    return (
      <div className="home-greeting">
        <h3 className="hello">{currentHour < 16 ? <Sun /> : <Moon /> }hi {username},</h3>
        <h2 className="greet">{greeting}</h2>
      </div>
    );
}
export default Greeting