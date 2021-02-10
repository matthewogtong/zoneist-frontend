import React from "react"
import Market from "./Market"
import ZonesContainer from "./ZonesContainer"
import ZoneForm from "./ZoneForm"
import TagsContainer from "./TagsContainer"

const Middle = ({
  currentUser,
  renderType,
  currentTokens,
  setCurrentTokens,
  regions,
  trinkets,
  currentZones,
  setCurrentZones,
  currentTags,
  setCurrentTags,
}) => {
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
    } else if (renderType === "tags") {
      return (
        <TagsContainer
          currentUser={currentUser}
          currentTags={currentTags}
          setCurrentTags={setCurrentTags}
        />
      )
    } else if (renderType === "zone-form") {
      return (
        <ZoneForm
          currentUser={currentUser}
          currentZones={currentZones}
          setCurrentZones={setCurrentZones}
          currentTags={currentTags}
          setCurrentTags={setCurrentTags}
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

  return <div className="home-middle p-shadow-8">{renderContent()}</div>
}

export default Middle
