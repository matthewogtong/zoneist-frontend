import React from "react"
import { ReactComponent as LPrinter } from "../../svg/trinkets/loaf-3D-printing.svg"
import { ReactComponent as Axe } from "../../svg/trinkets/loaf-axe.svg"
import { ReactComponent as Bath } from "../../svg/trinkets/loaf-bath.svg"
import { ReactComponent as Camera } from "../../svg/trinkets/loaf-camera.svg"
import { ReactComponent as Campfire } from "../../svg/trinkets/loaf-campfire-1.svg"
import { ReactComponent as Candle } from "../../svg/trinkets/loaf-candle-3.svg"
import { ReactComponent as Coffee } from "../../svg/trinkets/loaf-coffee-3.svg"
import { ReactComponent as Devices } from "../../svg/trinkets/loaf-devices-4.svg"
import { ReactComponent as Diamond } from "../../svg/trinkets/loaf-diamond-1.svg"
import { ReactComponent as Draw } from "../../svg/trinkets/loaf-draw-1.svg"
import { ReactComponent as Drone } from "../../svg/trinkets/loaf-drone-1.svg"
import { ReactComponent as Earth } from "../../svg/trinkets/loaf-earth.svg"
import { ReactComponent as FidgetSpinner } from "../../svg/trinkets/loaf-fidget-spinner.svg"
import torii from "../../img/bluelaketorii.jpg"

const ZonesContainer = () => {
  return (
    <>
      <div className="container">
        <div>
          <LPrinter />
        </div>
        <div className="vertical">
          <Axe />
        </div>
        <div className="horizontal">
          <Bath />
        </div>
        <div>
          <Camera />
        </div>
        <div>
          <Campfire />
        </div>
        <div className="big">
          <Candle />
        </div>
        <div>
          <Coffee />
        </div>
        <div className="vertical">
          <Devices />
        </div>
        <div>
          <Diamond />
        </div>
        <div className="horizontal">
          <Draw />
        </div>
        <div>
          <Drone />
        </div>
        <div className="big">
          <Earth />
        </div>
        <div>
          <FidgetSpinner />
        </div>
        <div className="big">
          <img src={torii} alt="beach" />
        </div>
      </div>
    </>
  )
}

export default ZonesContainer