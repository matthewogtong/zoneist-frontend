import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSpring, animated } from "react-spring"
import { InputText } from "primereact/inputtext"
import { useDispatch } from "react-redux"
import { setUser, setLoggedIn } from "../redux/user"

const SignUp = () => {
  //   ANIMATIONS
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: "auto",
    from: { opacity: 0, marginLeft: -500 },
    delay: 250,
    duration: 1000,
  })

  // DISPATCH
  const dispatch = useDispatch()

  //   STATES
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUpError, setSignUpError] = useState(null)

  //   OTHER
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = { username, password }

    fetch("https://zoneist.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        return r.json().then((data) => {
          // .ok is true for good status codes, and false for bad status codes
          if (r.ok) {
            // return data to the next .then method
            return data
          } else {
            // throw data to the .catch method
            throw data
          }
        })
      })
      .then((data) => {
        // success:
        dispatch(setUser(data.user))
        dispatch(setLoggedIn())
        localStorage.setItem("token", data.token)
        history.push("/home")
      })
      .catch((data) => {
        // error:
        if (data.error) {
          setSignUpError(data.error[0].toLowerCase())
        }
      })
  }
  return (
      <div className="sign-up-container p-shadow-24">
        <animated.h1 style={fadeIn} className="sign-up-h1">sign up</animated.h1>
        <form onSubmit={handleSubmit}>
          <span className="p-float-label">
            <InputText
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">username</label>
          </span>
          <span className="p-float-label">
            <InputText
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <label htmlFor="password">password</label>
          </span>
          {signUpError ? (
            <p style={{ color: "black" }}>Error: {signUpError}</p>
          ) : null}
          <input type="submit" value="submit" />
        </form>
      </div>
  )
}

export default SignUp
