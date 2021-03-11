import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setUser, setLoggedIn, setZonesToday, openModal, closeModal } from "./redux/user"
import { setRegions } from "./redux/region"
import { setTrinkets } from "./redux/trinket"
import Modal from 'react-modal'

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
import { ReactComponent as Hammer } from './svg/nontrinkets/hammer.svg'
import { ReactComponent as Money } from './svg/nontrinkets/money.svg'
 
function App() {

  // DISPATCH
  const dispatch = useDispatch()
  const history = useHistory()
  const camelcaseKeys = require('camelcase-keys');

  // REDUX SELECTOR
  const isLoggedIn = useSelector(state => {
    return (
      state.user.loggedIn ? true : false
    )
  })

  
  // AUTO LOGIN
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
          console.log(user)
          dispatch(setUser(user))
          dispatch(setLoggedIn())
          dispatch(setZonesToday(camelcaseKeys(user.zones)))
        });
    }
  }, [dispatch, camelcaseKeys]);

  // GET REGIONS
  useEffect(() => {
    fetch(`http://localhost:3001/regions`)
      .then((r) => r.json())
      .then((regionsArr) => dispatch(setRegions(regionsArr)))
  }, [dispatch])


  // GET TRINKETS
  useEffect(() => {
    fetch(`http://localhost:3001/trinkets`)
      .then((r) => r.json())
      .then((trinketsArr) => dispatch(setTrinkets(trinketsArr)))
  }, [dispatch])


  PrimeReact.ripple = true;

  const handleCloseModal = () => {
    dispatch(closeModal())
    history.push('/zones')
  }

  const modalState = useSelector(state => state.user.modalOpen)

  return (
    <div className="App">
      {modalState ? (
        <Modal
          ariaHideApp={false}
          className="modal-complete-div p-shadow-8"
          isOpen={modalState}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"
        >
            <div>
                <h1>congratulations for successfully focusing </h1>
                <h1>on your objective for the alloted time!</h1>
                <h2>Here are some tokens for your success ~ <Money /></h2>
                <button onClick={handleCloseModal}>close me</button>
            </div>
        </Modal>
      ) : null}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <LandingPage
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <LandingPage
            />
          )}
        </Route>
        <Route exact path="/signup">
          {isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <LandingPage
            />
          )}
        </Route>
        <Route exact path="/home">
          {isLoggedIn ? (
            <HomePage
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/tags">
          {isLoggedIn ? (
            <HomePage
              renderType="tags"
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/zone-form">
          {isLoggedIn ? (
            <HomePage
              renderType="zone-form"
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/in-the-zone">
          {isLoggedIn ? (
            <HomePage
              renderType="in-the-zone"
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/zones">
          {isLoggedIn ? (
            <HomePage
              renderType="zones"
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/market">
          {isLoggedIn ? (
            <HomePage
              renderType="market"
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/collection">
          {isLoggedIn ? (
            <HomePage
              renderType="collection"
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
