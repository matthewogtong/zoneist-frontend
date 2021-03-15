import React from "react"
import { useSpring, animated } from "react-spring"
import { useSelector } from "react-redux"

const AuthContainer = () => {

  const username = useSelector(state => state.user.entities[0].username)
  
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: "auto",
    from: { opacity: 0, marginLeft: -500 },
    delay: 1000,
    duration: 1000,
  })

  return (
    <>
      <div style={fadeIn} className="auth-container p-shadow-8">
        <animated.h1 style={fadeIn} className="auth-h1">
          welcome back
        </animated.h1>
        <animated.h2 style={fadeIn} className="auth-h2">
          {username}
        </animated.h2>
      </div>
    </>
  );
}

export default AuthContainer
