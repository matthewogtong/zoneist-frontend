import React, { useState, useEffect } from "react"
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
const TrinketCarousel = () => {
    return (
        <div className="trinket-carousel">
            <h1>
                <LPrinter />
                <Axe />
            </h1>
        </div>
    )
}

export default TrinketCarousel