import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useSpring, animated } from "react-spring"

// IMPORT TRINKETS
import { ReactComponent as LPrinter } from "../../svg/trinkets/3D-printing.svg"
import { ReactComponent as Bed } from "../../svg/trinkets/bed.svg"
import { ReactComponent as Coder } from "../../svg/trinkets/coder.svg"
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

  const fadeIn = useSpring({
      opacity: 1,
      marginTop: 0,
      from: { opacity: 0, marginTop: -1000 },
      delay: 0
    });

  const svgMapper = {
    LPrinter: LPrinter,
    Bed: Bed,
    Coder: Coder,
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
    <animated.div style={fadeIn}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className={`${region.name.split(" ").join("")} completed-zone-front`}>
          front of card
          <button onClick={handleClick}>Click to Flip</button>
        </div>

        <div className="completed-zone-back">
          back of card
          <button onClick={handleClick}>Click to Flip</button>
        </div>
      </ReactCardFlip>
    </animated.div>
  );
};

export default Zone