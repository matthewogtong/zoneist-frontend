import React from 'react'
import { useSpring, animated } from "react-spring"

const Market = () => {

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 500
      });

    return (
        <animated.div style={fadeIn} className="market">
            <p>Market</p>
        </animated.div>
    )
}

export default Market