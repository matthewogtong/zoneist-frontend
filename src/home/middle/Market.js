import React from 'react'
import { useSpring, animated } from "react-spring"
import RegionCarousel from './RegionCarousel'
import TrinketCarousel from './TrinketCarousel'

const Market = ({ currentUser, regions, currentTokens, setCurrentTokens }) => {

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 250
      });

    

    return (
      <animated.div style={fadeIn} className="market">
        <RegionCarousel
          currentUser={currentUser}
          currentTokens={currentTokens}
          setCurrentTokens={setCurrentTokens}
          regions={regions}
        />
        <TrinketCarousel />
      </animated.div>
    );
}

export default Market