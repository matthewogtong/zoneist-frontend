import React from "react"
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1 className="about-header p-shadow-8">zoneist</h1>
            <div className="about-nav p-shadow-8">
                <Link to="/" style={{ textDecoration: "none" }}>Title</Link>
                <Link to="/home" style={{ textDecoration: "none" }}>Home</Link>
            </div>
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