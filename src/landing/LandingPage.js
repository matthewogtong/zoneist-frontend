import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingTitle from './LandingTitle'
import LandingContent from './LandingContent'
import LandingNav from './LandingNav'
import LogIn from './LogIn'
import SignUp from './SignUp'
import AuthContainer from './AuthContainer'


const LandingPage = () => {
    return (
      <div className="landing-page">
        <LandingTitle />
        <LandingContent />
        <LandingNav />
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <AuthContainer />
          </Route>
        </Switch>
      </div>
    );
        
    
}

export default LandingPage