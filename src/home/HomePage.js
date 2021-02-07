import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import ZonesContainer from './middle/ZonesContainer'

const HomePage = ({ currentUser, setCurrentUser }) => {

  const handleLogOut = () => {
    setCurrentUser(null)
    localStorage.removeItem("token")
  }
    return (
      <>
        <h1>This Home Page</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button label="Title" />
        </Link>
        <Button onClick={handleLogOut}>Log Out</Button>
        <ZonesContainer />
      </>
    );
}

export default HomePage