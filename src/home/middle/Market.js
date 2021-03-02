import React from 'react'
import { useSpring, animated } from "react-spring"
import RegionCarousel from './RegionCarousel'
import TrinketCarousel from './TrinketCarousel'

const Market = () => {

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 0
      });

    return (
      <animated.div style={fadeIn} className="market">
        <RegionCarousel />
        <TrinketCarousel />
      </animated.div>
    );
}

export default Market