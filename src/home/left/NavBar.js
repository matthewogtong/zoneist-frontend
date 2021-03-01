import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "primereact/button"


const NavBar = () => {

  return (
    <nav className="nav-bar p-shadow-8">
      <Link to="/zones" style={{ textDecoration: 'none' }}>Zones</Link>
      <br/>
      <Link to="/market" style={{ textDecoration: 'none' }}>Market</Link>
      <br/>
      <Link to="/collection" style={{ textDecoration: 'none' }}>Collection</Link>
      <br/>
      <Link to="/analytics" style={{ textDecoration: 'none' }}>Analytics</Link>
      <br/>
      <Link to="/tags" style={{ textDecoration: 'none' }}>Tags</Link>
      <br/>
      <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
      <br/>
      <Link to="/" style={{ textDecoration: 'none' }}>Title | Log Out</Link>
      <br/>
      <Link to="zone-form" style={{ textDecoration: 'none' }}>
        <Button>Enter Zone</Button>
      </Link>
    </nav>
  )
}

export default NavBar