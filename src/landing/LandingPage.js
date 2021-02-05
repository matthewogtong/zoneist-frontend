import React from 'react'
import LandingTitle from './LandingTitle'
import LandingContent from './LandingContent'
import AuthSlide from './AuthSlide'

const LandingPage = () => {
    return (
      <div id="landing-page">
        <LandingTitle />
        <LandingContent />
        <AuthSlide />
      </div>
    );
        
    
}

export default LandingPage