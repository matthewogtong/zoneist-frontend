import React from 'react'
import Header from './header/Header'

const HomePage = ({ currentUser, setCurrentUser }) => {
  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  return (
    <div className="home-page">
      <Header currentUser={currentUser}/>
    </div>
  )
}

export default HomePage