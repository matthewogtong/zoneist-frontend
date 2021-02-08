import React from 'react'
import { useSpring, animated } from "react-spring"
import HomeTitle from './HomeTitle'
import HomeDate from './HomeDate'
import Greeting from './Greeting'

const Header = ({ currentUser }) => {
    const fadeIn = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -500 },
      delay: 0,
      duration: 1000,
    });

  return (
    <animated.div style={fadeIn} className="home-header p-shadow-24">
      <HomeTitle currentUser={currentUser} />
      <HomeDate />
      <Greeting currentUser={currentUser} />
    </animated.div>
  )
}

export default Header