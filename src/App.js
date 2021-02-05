import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './landing/LandingPage'
import LogInPage from './login/LogInPage'
import HomePage from './home/HomePage'

// NONTRINKETS IMPORTS
import { ReactComponent as Hammer } from './svg/nontrinkets/loaf-hammer.svg'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/home">
          <HomePage />
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
