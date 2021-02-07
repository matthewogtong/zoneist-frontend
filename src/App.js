import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';


import LandingPage from './landing/LandingPage'
import AboutPage from './about/AboutPage'
import HomePage from './home/HomePage'

// NONTRINKETS IMPORTS
import { ReactComponent as Hammer } from './svg/nontrinkets/loaf-hammer.svg'


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  console.log({ currentUser })

  PrimeReact.ripple = true;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {currentUser ? (
            <LandingPage />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login">
          <LandingPage setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <LandingPage />
        </Route>
        <Route path="/home">
          {currentUser ? (
            <HomePage currentUser={currentUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
          <a href="/login">Log In</a>
          <a href="/">Back</a>
          <Hammer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
