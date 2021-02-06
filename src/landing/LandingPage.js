import React from 'react'
import LandingTitle from './LandingTitle'
import LandingContent from './LandingContent'
import AuthContainer from './AuthContainer'

const LandingPage = () => {
    return (
      <div className="landing-page">
          <LandingTitle />
          <LandingContent />
          <AuthContainer />
      </div>
    );
        
    
}

export default LandingPage