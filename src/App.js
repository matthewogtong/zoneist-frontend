import React, { useState, useEffect } from 'react'
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
import Market from './home/middle/Market'

// NONTRINKETS IMPORTS
import { ReactComponent as Hammer } from './svg/nontrinkets/loaf-hammer.svg'



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  // autologin
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/home", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    }
  }, []);

  PrimeReact.ripple = true;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {currentUser ? <LandingPage currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <LandingPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
          )}
        </Route>
        <Route exact path="/signup">
        {currentUser ? (
            <Redirect to="/" />
          ) : (
            <LandingPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
          )}
        </Route>
        <Route path="/home">
          {currentUser ? (
            <HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/zones">
          <HomePage renderType="zones" currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/market">
          <HomePage renderType="market" currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
