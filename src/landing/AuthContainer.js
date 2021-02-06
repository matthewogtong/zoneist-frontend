import React from "react"
import { Link } from "react-router-dom"
import { useSpring, animated } from "react-spring"
import { Button } from "primereact/button"
import LogIn from "./LogIn"

const AuthContainer = () => {
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
        <Button className="log-in-button" label="Log In" />
        <Button className="sign-up-button" label="Sign Up" />
      </animated.div>
      <animated.nav style={fadeIn} className="landing-nav">
        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>
      </animated.nav>
    </>
  )
}

export default AuthContainer
