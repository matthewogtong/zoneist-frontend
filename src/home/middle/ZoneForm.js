import React from 'react'
import { useSpring, animated } from "react-spring"

const ZoneForm = () => {

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 0
      });
    return (
        <animated.div style={fadeIn} className="zone-form">
            <h1>yo im the zone form</h1>
        </animated.div>
    )
}

export default ZoneForm