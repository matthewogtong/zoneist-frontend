import React from 'react'
import Header from './header/Header'
import Left from './left/Left'
import Middle from './middle/Middle'

const HomePage = ({ currentUser, setCurrentUser }) => {
  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  
  return (
    <div className="home-page">
      <Header currentUser={currentUser}/>
      <Left />
      <Middle />
    </div>
  )
}

export default HomePage