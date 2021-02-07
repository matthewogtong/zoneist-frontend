import React from "react"
import { useSpring, animated } from "react-spring"

const AuthContainer = ({ currentUser }) => {
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -500 },
    delay: 1000,
    duration: 1000,
  })

  return (
    <>
      <animated.div style={fadeIn} className="auth-container p-shadow-24">
        <p>welcome {currentUser.username}</p>
      </animated.div>
    </>
  )
}

export default AuthContainer
