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
  const [currentTokens, setCurrentTokens] = useState(0)
  const [regions, setRegions] = useState([])
  const [trinkets, setTrinkets] = useState([])
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
        .then((user) => {
          setCurrentUser(user)
          setCurrentTokens(user.tokens)
        });
    }
  }, []);

  // GET REGIONS
  useEffect(() => {
    fetch(`http://localhost:3001/regions`)
      .then((r) => r.json())
      .then((regionsArr) => setRegions(regionsArr))
  }, [])

  // GET TRINKETS
  useEffect(() => {
    fetch(`http://localhost:3001/trinkets`)
      .then((r) => r.json())
      .then((trinketsArr) => setTrinkets(trinketsArr))
  }, [])


  PrimeReact.ripple = true;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {currentUser ? (
            <LandingPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login">
          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <LandingPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        </Route>
        <Route exact path="/signup">
          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <LandingPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        </Route>
        <Route path="/home">
          {currentUser ? (
            <HomePage
              currentUser={currentUser}
              currentTokens={currentTokens}
              setCurrentTokens={setCurrentTokens}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/zones">
          {currentUser ? (
            <HomePage
              renderType="zones"
              currentUser={currentUser}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/market">
          {currentUser ? (
            <HomePage
              renderType="market"
              currentUser={currentUser}
              currentTokens={currentTokens}
              setCurrentTokens={setCurrentTokens}
              regions={regions}
              trinkets={trinkets}
            />
          ) : (
            <Redirect to="/" />
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
