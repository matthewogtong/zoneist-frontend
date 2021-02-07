import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { InputText } from 'primereact/inputtext'

const SignUp = () => {
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -500 },
    delay: 250,
    duration: 1000,
  })

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log("you have signed up")
  }
  return (
    <>
      <animated.div style={fadeIn} className="sign-up-container p-shadow-24">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <span className="p-float-label">
            <InputText
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </span>
          <span className="p-float-label">
            <InputText
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <label htmlFor="password">Password</label>
          </span>
          <input type="submit" value="SignUp" />
        </form>
      </animated.div>
    </>
  );
}

export default SignUp