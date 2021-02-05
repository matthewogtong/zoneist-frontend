import React from 'react'
import { Button } from 'primereact/button'

const AuthSlide = () => {
    return (
      <>
        <nav className="landing-nav">
          <div>
            <a href="/login">Log In</a>
          </div>
          <div>
            <a href="/signup">Sign Up</a>
          </div>
          <div>
            <a href="/home">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
        </nav>
      </>
    );
};

export default AuthSlide