import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSpring, animated } from "react-spring"
import { InputText } from "primereact/inputtext"
import { useDispatch } from "react-redux"
import { setUser, setLoggedIn, setZonesToday } from "../redux/user"

const LogIn = () => {
  // ANIMATIONS
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: "auto",
    from: { opacity: 0, marginLeft: -500 },
    delay: 250,
    duration: 1000
  })

   // DISPATCH
  const dispatch = useDispatch()

  // STATES
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [logInError, setLogInError] = useState(null)

  // OTHER
  const camelcaseKeys = require('camelcase-keys');

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = { username, password }

    fetch("https://zoneist.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        return r.json().then((data) => {
          if (r.ok) {
            return data
          } else {
            throw data
          }
        })
      })
      .then((data) => {
        dispatch(setUser(data.user))
        dispatch(setLoggedIn())
        dispatch(setZonesToday(camelcaseKeys(data.user.zones)))
        localStorage.setItem("token", data.token)
        history.push("/home")
      })
      .catch((data) => {
        setLogInError(data.error)
      })
  }

  return (
      <div style={fadeIn} className="log-in-container p-shadow-8">
        <animated.h1 style={fadeIn} className="log-in-h1">login</animated.h1>
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
          {logInError ? (
            <p style={{ color: "red" }}>Error: {logInError}</p>
          ) : null}
          <input type="submit" value="submit" />
        </form>
      </div>
  )
}

export default LogIn
