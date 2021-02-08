import React from 'react'

const HomeTitle = ({ currentUser }) => {
    return (
        <div className="home-title">
            <h2>zoneist</h2>
            <p>Tokens: {currentUser.tokens}</p>
        </div>
        
    )
}

export default HomeTitle