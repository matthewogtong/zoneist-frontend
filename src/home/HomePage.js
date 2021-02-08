import React from 'react'
import Header from './header/Header'
import Left from './left/Left'
import Middle from './middle/Middle'
import Right from './right/Right'

const HomePage = ({ currentUser, setCurrentUser, renderType }) => {
  
  return (
    <div className="home-page">
      <Header currentUser={currentUser}/>
      <Left />
      <Middle renderType={renderType} currentUser={currentUser}/>
      <Right />
    </div>
  )
}

export default HomePage