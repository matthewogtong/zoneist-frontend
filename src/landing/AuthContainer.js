import React from "react"
import { useSpring, animated } from "react-spring"
import { useSelector } from "react-redux"

const AuthContainer = () => {

  const username = useSelector(state => state.user.entities[0].username)
  
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
        <p>welcome {username}</p>
      </animated.div>
    </>
  )
}

export default AuthContainer
