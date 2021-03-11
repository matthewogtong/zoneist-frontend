import React from "react"
import Market from "./Market"
import ZonesContainer from "./ZonesContainer"
import ZoneForm from "./ZoneForm"
import InTheZone from "./InTheZone"
import TagsContainer from "./TagsContainer"
import Collection from "./Collection"
import Analytics from "./Analytics"

const Middle = ({ renderType }) => {
  const renderContent = () => {
    if (renderType === "market") {
      return (
        <div className="home-middle p-shadow-3">
          <Market />
        </div>
      )
    } else if (renderType === "tags") {
      return (
        <div className="home-middle p-shadow-3">
          <TagsContainer />
        </div>
      )
    } else if (renderType === "collection") {
      return (
        <div className="home-middle p-shadow-3">
          <Collection />
        </div>
      )
    } else if (renderType === "analytics") {
      return (
        <div className="home-middle p-shadow-3">
          <Analytics/>
        </div>
      ) 
    } else if (renderType === "zone-form") {
      return (
        <div className="home-middle p-shadow-3">
          <ZoneForm />
        </div>
      ) 
    } else if (renderType === "in-the-zone") {
      return (
        <div className="home-middle p-shadow-3">
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
}

export default Middle
