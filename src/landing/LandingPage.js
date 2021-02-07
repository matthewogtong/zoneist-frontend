import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingTitle from './LandingTitle'
import LandingContent from './LandingContent'
import LandingNav from './LandingNav'
import LogIn from './LogIn'
import SignUp from './SignUp'
import AuthContainer from './AuthContainer'


const LandingPage = ({ currentUser, setCurrentUser }) => {
    return (
      <div className="landing-page">
        <LandingTitle />
        <LandingContent />
        <LandingNav currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route path="/login">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <AuthContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </div>
    );
        
    
}

export default LandingPage