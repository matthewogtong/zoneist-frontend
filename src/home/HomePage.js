import React from 'react'
import Header from './header/Header'
import Left from './left/Left'
import Middle from './middle/Middle'
import Right from './right/Right'

const HomePage = ({
  currentUser,
  renderType,
  regions,
  trinkets,
  currentTokens,
  setCurrentTokens,
  currentZones,
  setCurrentZones,
}) => {
  return (
    <div className="home-page">
      <Header
        currentUser={currentUser}
        currentTokens={currentTokens}
        setCurrentTokens={setCurrentTokens}
      />
      <Left />
      <Middle
        renderType={renderType}
        currentUser={currentUser}
        regions={regions}
        trinkets={trinkets}
        currentTokens={currentTokens}
        setCurrentTokens={setCurrentTokens}
        currentZones={currentZones}
        setCurrentZones={setCurrentZones}
      />
      <Right />
    </div>
  );
};

export default HomePage