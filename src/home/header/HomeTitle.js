import React from 'react'
import { useSelector } from "react-redux"

const HomeTitle = ({ currentUser, currentTokens, setCurrentTokens }) => {

    const tokens = useSelector(state => state.user.entities[0].tokens)
    
    console.log(tokens)

    return (
        <div className="home-title">
            <h2>zoneist</h2>
            <p>Tokens: {tokens}</p>
        </div>
        
    )
}

export default HomeTitle