import React from 'react'
import Market from './Market'
import ZonesContainer from './ZonesContainer'

const Middle = ({ currentUser, renderType, currentTokens, setCurrentTokens, regions, trinkets, currentZones, setCurrentZones }) => {

    const renderContent = () => {
        if (renderType === "market") {
          return (
            <Market
              currentUser={currentUser}
              currentTokens={currentTokens}
              setCurrentTokens={setCurrentTokens}
              regions={regions}
              trinkets={trinkets}
            />
          )
        } else if (renderType === "zones") {
          return (
            <ZonesContainer
              currentUser={currentUser}
              currentZones={currentZones}
              setCurrentZones={setCurrentZones}
            />
          )
        } else {
          return (
            <ZonesContainer
              currentUser={currentUser}
              currentZones={currentZones}
              setCurrentZones={setCurrentZones}
            />
          )
        }
    }

    return (
      <div className="home-middle p-shadow-8">
          {renderContent()}
      </div>
    )
}

export default Middle