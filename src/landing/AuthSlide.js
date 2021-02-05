import React from 'react'
import { useSpring, animated } from "react-spring"

const AuthSlide = () => {
    const fadeIn = useSpring({
      opacity: 1,
      marginLeft: 0,
      from: { opacity: 0, marginLeft: -500 },
      delay: 1000,
      duration: 1000
    });

    return (
      <>
        <animated.nav style={fadeIn} className="landing-nav">
          <div>
            <a href="/login">Log In</a>
          </div>
          <div>
            <a href="/signup">Sign Up</a>
          </div>
          <div>
            <a href="/home">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
        </animated.nav>
      </>
    );
};

export default AuthSlide