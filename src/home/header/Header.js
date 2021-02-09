import React from 'react'
import { useSpring, animated } from "react-spring"
import HomeTitle from './HomeTitle'
import HomeDate from './HomeDate'
import Greeting from './Greeting'

const Header = ({ currentUser, currentTokens, setCurrentTokens }) => {
    const fadeIn = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -500 },
      delay: 0,
      duration: 1000,
    });

  return (
    <animated.div style={fadeIn} className="home-header">
      <HomeTitle
        currentUser={currentUser}
        currentTokens={currentTokens}
        setCurrentTokens={setCurrentTokens}
      />
      <HomeDate />
      <Greeting currentUser={currentUser} />
    </animated.div>
  );
}

export default Header