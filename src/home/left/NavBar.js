import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "primereact/button"
import { useSelector } from 'react-redux'


const NavBar = () => {


  const isInZone = useSelector(state => state.user.inZone)

  return (
    <nav className="nav-bar p-shadow-8">
      <Link
        to="/zones"
        className="navbar-link"
        style={{ textDecoration: "none" }}
      >
        <span className="pi pi-star"></span>zones
      </Link>
      <Link
        to="/market"
        className="navbar-link"
        style={{ textDecoration: "none" }}
      >
        <span className="pi pi-shopping-cart"></span>market
      </Link>
      <Link
        to="/collection"
        className="navbar-link"
        style={{ textDecoration: "none" }}
      >
        <span className="pi pi-th-large"></span>collection
      </Link>
      <Link
        to="/analytics"
        className="navbar-link"
        style={{ textDecoration: "none" }}
      >
        <span className="pi pi-chart-bar"></span>analytics
      </Link>
      <Link
        to="/tags"
        className="navbar-link"
        style={{ textDecoration: "none" }}
      >
        <span className="pi pi-tags"></span>tags
      </Link>
      <Link
        to="/about"
        className="navbar-link"
        style={{ textDecoration: "none" }}
      >
        <span className="pi pi-question"></span>about
      </Link>
      <Link to="/" className="navbar-link" style={{ textDecoration: "none" }}>
        <span className="pi pi-key"></span>title | log out
      </Link>
      {isInZone ? (
        <Link to="in-the-zone" style={{ textDecoration: "none" }}>
          <Button className="button-dark zone-button">see current zone</Button>
        </Link>
      ) : (
        <Link to="zone-form" style={{ textDecoration: "none" }}>
          <Button className="button-bright zone-button">enter new zone</Button>
        </Link>
      )}
    </nav>
  );
}

export default NavBar