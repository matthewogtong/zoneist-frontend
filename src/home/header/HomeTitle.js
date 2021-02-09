import React from 'react'

const HomeTitle = ({ currentUser, currentTokens, setCurrentTokens }) => {
    return (
        <div className="home-title">
            <h2>zoneist</h2>
            <p>Tokens: {currentTokens}</p>
        </div>
        
    )
}

export default HomeTitle