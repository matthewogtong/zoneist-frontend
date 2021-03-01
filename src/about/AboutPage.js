import React from "react"
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1 className="about-header">zoneist</h1>
            <nav className="about-nav">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button>Title</Button>
                </Link>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button>Home</Button>
                </Link>
            </nav>
            <div className="about-focus p-shadow-8">
                Focus
            </div>
            <div className="about-customize p-shadow-8">
                Customize
            </div>
            <div className="about-achieve p-shadow-8">
                Achieve
            </div>
        </div>
    )
}

export default AboutPage