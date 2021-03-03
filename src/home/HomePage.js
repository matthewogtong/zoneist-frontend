import React from 'react'
import Header from './header/Header'
import Left from './left/Left'
import Middle from './middle/Middle'
import Right from './right/Right'

const HomePage = ({ renderType }) => {
  return (
    <div className="home-page">
      <Header />
      <Left />
      <Middle renderType={renderType} />
      <Right />
    </div>
  );
};

export default HomePage