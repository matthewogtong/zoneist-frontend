import React from "react"
import Market from "./Market"
import ZonesContainer from "./ZonesContainer"
import ZoneForm from "./ZoneForm"
import TagsContainer from "./TagsContainer"

const Middle = ({ renderType }) => {
  const renderContent = () => {
    if (renderType === "market") {
      return (
        <Market />
      )
    } else if (renderType === "tags") {
      return (
        <TagsContainer />
      )
    } else if (renderType === "zone-form") {
      return (
        <ZoneForm />
      )
    } else if (renderType === "zones") {
      return (
        <ZonesContainer />
      )
    } else {
      return (
        <ZonesContainer />
      )
    }
  }

  return <div className="home-middle p-shadow-8">{renderContent()}</div>
}

export default Middle
