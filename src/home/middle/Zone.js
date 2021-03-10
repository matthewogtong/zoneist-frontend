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

  let SVG = svgMapper[trinket.name]

  return (
    <div className={`${region.name.split(' ').join('')} completed-zone`}>
      <h2>{zoneStart}</h2>
      <p>{objective}</p>
      <SVG />
      <p></p>
      <p></p>
    </div>
  );
};

export default Zone