import React from 'react'

const Greeting = ({ currentUser }) => {
    return (
      <div className="home-greeting">
        <h2>Hello, {currentUser.username}</h2>
      </div>
    );
}
export default Greeting