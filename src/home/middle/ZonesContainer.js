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
import beach from "../../img/beachPhoto.jpeg"
import lava from "../../img/lava.jpeg"
import torii from "../../img/torii.jpeg"
import pond from "../../img/pond.jpeg"
import mountains from "../../img/mountains.jpeg"

const ZonesContainer = () => {
  return (
    <>
      <div class="container">
        <div>
          <LPrinter />
        </div>
        <div class="vertical">
          <Axe />
        </div>
        <div class="horizontal">
          <Bath />
        </div>
        <div>
          <Camera />
        </div>
        <div>
          <Campfire />
        </div>
        <div class="big">
          <Candle />
        </div>
        <div>
          <Coffee />
        </div>
        <div class="vertical">
          <Devices />
        </div>
        <div>
          <Diamond />
        </div>
        <div class="horizontal">
          <Draw />
        </div>
        <div>
          <Drone />
        </div>
        <div class="big">
          <Earth />
        </div>
        <div>
          <FidgetSpinner />
        </div>
        <div class="horizontal">
          <img src={beach} alt="beach" />
          <Drone />
        </div>
        <div>
          <img src={lava} alt="beach" />
        </div>
        <div class="big">
          <img src={torii} alt="beach" />
        </div>
        <div>
          <img src={pond} alt="beach" />
        </div>
        <div class="vertical">
          <img src={mountains} alt="beach" />
        </div>
      </div>
    </>
  )
}

export default ZonesContainer