import React from "react"
import { Link } from 'react-router-dom'
import { useSpring, animated } from "react-spring"
import { Button } from "primereact/button"
import { useDispatch, useSelector } from "react-redux"
import { setLoggedOut } from "../redux/user"


const LandingNav = () => {
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -500 },
    delay: 1000,
    duration: 1000,
  })

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(setLoggedOut())
    localStorage.removeItem("token")
  }

  const isLoggedIn = useSelector(state => state.user.loggedIn)

  return (
    <>
      <animated.div style={fadeIn} className="landing-nav">
        {isLoggedIn ? (
          <>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button className="button-bright" label="home" />
            </Link>
            <Button className="button-dark" onClick={handleLogOut}>log out</Button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button className="button-bright" label="log in" />
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button className="button-dark" label="sign up" />
            </Link>
          </>
        )}
      </animated.div>
    </>
  );
}

export default LandingNav