import React from "react"
import Market from "./Market"
import ZonesContainer from "./ZonesContainer"
import ZoneForm from "./ZoneForm"
import InTheZone from "./InTheZone"
import TagsContainer from "./TagsContainer"

const Middle = ({ renderType }) => {
  const renderContent = () => {
    if (renderType === "market") {
      return (
        <div className="home-middle p-shadow-8">
          <Market />
        </div>
      )
    } else if (renderType === "tags") {
      return (
        <div className="home-middle p-shadow-8">
          <TagsContainer />
        </div>
      )
    } else if (renderType === "zone-form") {
      return (
        <div className="home-middle p-shadow-8">
          <ZoneForm />
        </div>
      ) 
    } else if (renderType === "in-the-zone") {
      return (
        <div className="home-middle p-shadow-8">
          <InTheZone />
        </div>
      ) 
    } else if (renderType === "zones") {
      return (
        <div className="zones-middle">
          <ZonesContainer />
        </div>
      )
    } else {
      return (
        <div className="zones-middle">
          <ZonesContainer />
        </div>
      )
    }
  }

  return (
    renderContent()
  )

  // return <div className="home-middle p-shadow-8">{renderContent()}</div>
}

export default Middle
