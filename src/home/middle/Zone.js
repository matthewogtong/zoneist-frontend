import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { format } from "date-fns"

// IMPORT TRINKETS
import { ReactComponent as LPrinter } from "../../svg/trinkets/loaf-3D-printing.svg"
import { ReactComponent as Axe } from "../../svg/trinkets/loaf-axe.svg"
import { ReactComponent as Bath } from "../../svg/trinkets/loaf-bath.svg"
import { ReactComponent as Camera } from "../../svg/trinkets/loaf-camera.svg"
import { ReactComponent as Campfire } from "../../svg/trinkets/loaf-campfire-1.svg"
import { ReactComponent as Candle } from "../../svg/trinkets/loaf-candle-3.svg"
import { ReactComponent as Coffee } from "../../svg/trinkets/loaf-coffee-3.svg"
import { ReactComponent as Devices } from "../../svg/trinkets/loaf-devices-4.svg"
import { ReactComponent as Diamond } from "../../svg/trinkets/loaf-diamond-1.svg"

const Zone = ({
  objective,
  zoneStart,
  zoneEnd,
  totalObjectiveTime,
  tag,
  trinket,
  region,
}) => {

  const svgMapper = {
    LPrinter: LPrinter,
    Axe: Axe,
    Bath: Bath,
    Camera: Camera,
    Campfire: Campfire,
    Candle: Candle,
    Coffee: Coffee,
    Devices: Devices,
    Diamond: Diamond,
  }

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  let SVG = svgMapper[trinket.name]

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={`${region.name.split(" ").join("")} completed-zone-front`}>
        front of card
        <button onClick={handleClick}>Click to Flip</button>
      </div>

      <div className="completed-zone-back">
        back of card
        <button onClick={handleClick}>Click to Flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default Zone