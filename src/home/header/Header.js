import React from 'react'
import HomeTitle from './HomeTitle'
import HomeDate from './HomeDate'
import Greeting from './Greeting'

const Header = ({ currentUser }) => {
  return (
    <div className="home-header p-shadow-24">
      <HomeTitle currentUser={currentUser} />
      <HomeDate />
      <Greeting currentUser={currentUser} />
    </div>
  )
}

export default Header