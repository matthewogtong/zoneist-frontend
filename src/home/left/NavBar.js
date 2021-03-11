import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "primereact/button"
import { useSelector } from 'react-redux'



const NavBar = () => {


  const isInZone = useSelector(state => state.user.inZone)

  return (
    <nav className="nav-bar p-shadow-8">
      <Link to="/zones" style={{ textDecoration: "none" }}>
        Zones
      </Link>
      <Link to="/market" style={{ textDecoration: "none" }}>
        Market
      </Link>
      <Link to="/collection" style={{ textDecoration: "none" }}>
        Collection
      </Link>
      <Link to="/analytics" style={{ textDecoration: "none" }}>
        Analytics
      </Link>
      <Link to="/tags" style={{ textDecoration: "none" }}>
        Tags
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        About
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        Title | Log Out
      </Link>
      {isInZone ? (
        <Link to="in-the-zone" style={{ textDecoration: "none" }}>
          <Button>see current zone</Button>
        </Link>
      ) : (
        <Link to="zone-form" style={{ textDecoration: "none" }}>
          <Button>enter new zone</Button>
        </Link>
      )}
    </nav>
  );
}

export default NavBar