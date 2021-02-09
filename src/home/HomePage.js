import React from 'react'
import Header from './header/Header'
import Left from './left/Left'
import Middle from './middle/Middle'
import Right from './right/Right'

const HomePage = ({ currentUser, renderType, regions, trinkets, currentTokens, setCurrentTokens }) => {
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
      />
      <Right />
    </div>
  );
};

export default HomePage