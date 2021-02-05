import React from "react";
import { useSpring, animated } from "react-spring"

const LandingTitle = () => {
  const fadeIn = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -500 } });

  return (
    <animated.div  style={fadeIn} className="landing-title">
      <h1>zoneist</h1>
    </animated.div>
  );
};

export default LandingTitle;