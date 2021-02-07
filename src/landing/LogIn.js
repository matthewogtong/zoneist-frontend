import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { InputText } from "primereact/inputtext"

const LogIn = ({ setCurrentUser }) => {
  const fadeIn = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -500 },
    delay: 250,
    duration: 1000,
  })

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [logInError, setLogInError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { username, password };

    fetch("http://localhost:3001/login", {
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
            return data;
          } else {
            // throw data to the .catch method
            throw data;
          }
        });
      })
      .then((data) => {
        // success:
        setCurrentUser(data.user);
        localStorage.setItem("token", data.token);
      })
      .catch((data) => {
        // error:
        setLogInError(data.error);
      });
  };

  return (
    <>
      <animated.div style={fadeIn} className="log-in-container p-shadow-24">
        <h1>Login</h1>
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
          <input type="submit" value="Login" />
        </form>
        {logInError ? <p>{logInError}</p> : null}
      </animated.div>
    </>
  )
}

export default LogIn
