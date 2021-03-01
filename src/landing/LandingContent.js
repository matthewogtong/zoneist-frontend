import React from 'react'
import { useSpring, animated } from "react-spring"

const LandingContent = () => {
  const fadeIn = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
    delay: 500,
    duration: 1000,
  });
  return (
    <animated.div style={fadeIn} className="landing-content">
      <p>this the content</p>
    </animated.div>
  );
};

export default LandingContent