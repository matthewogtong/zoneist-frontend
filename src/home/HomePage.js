import React from 'react'
import Header from './header/Header'
import Left from './left/Left'
import Middle from './middle/Middle'
import Right from './right/Right'

const HomePage = ({ currentUser, renderType, regions }) => {
  return (
    <div className="home-page">
      <Header currentUser={currentUser} />
      <Left />
      <Middle
        renderType={renderType}
        currentUser={currentUser}
        regions={regions}
      />
      <Right />
    </div>
  );
};

export default HomePage