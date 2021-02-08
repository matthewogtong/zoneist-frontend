import React, { useEffect } from 'react'
import Market from './Market'
import ZonesCont from './ZonesCont'
import ZonesContainer from './ZonesContainer'

const Middle = ({ currentUser, renderType }) => {

    const renderContent = () => {
        if (renderType === "market") {
            return (
                <Market />
            )
        }
        else if (renderType === "zones") {
            return (
                <ZonesCont />
            )
        } else {
            return (
                <ZonesCont />
            )
        }
    }

    console.log(currentUser.zones)
    return (
      <div className="home-middle p-shadow-8">
          {renderContent()}
      </div>
    );
}

export default Middle