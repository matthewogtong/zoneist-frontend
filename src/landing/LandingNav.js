import React from "react"
import { Link } from 'react-router-dom'
import { useSpring, animated } from "react-spring"
import { Button } from "primereact/button"
import { useDispatch, useSelector } from "react-redux"
import { setLoggedOut } from "../redux/user"


const LandingNav = ({ currentUser, setCurrentUser }) => {
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
              <Button label="Home" />
            </Link>
            <Button onClick={handleLogOut}>Log Out</Button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button label="Log In" />
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button label="Sign Up" />
            </Link>
          </>
        )}
      </animated.div>
    </>
  );
}

export default LandingNav