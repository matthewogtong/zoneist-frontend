import React from 'react'
import { useSelector } from "react-redux"

const Greeting = () => {

    const username = useSelector(state => state.user.entities[0].username)

    return (
      <div className="home-greeting">
        <h2>Hello, {username}</h2>
      </div>
    );
}
export default Greeting