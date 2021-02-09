import React, { useEffect } from 'react'
import Market from './Market'
import ZonesContainer from './ZonesContainer'

const Middle = ({ currentUser, renderType, regions }) => {

    const renderContent = () => {
        if (renderType === "market") {
            return (
                <Market currentUser={currentUser} regions={regions} />
            )
        }
        else if (renderType === "zones") {
            return (
                <ZonesContainer />
            )
        } else {
            return (
                <ZonesContainer />
            )
        }
    }

    return (
      <div className="home-middle p-shadow-8">
          {renderContent()}
      </div>
    );
}

export default Middle