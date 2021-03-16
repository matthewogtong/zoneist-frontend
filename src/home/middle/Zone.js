import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useSpring, animated } from "react-spring"
import { Card } from 'primereact/card'
import { getDate, format } from 'date-fns'


// IMPORT TRINKETS
import { ReactComponent as LPrinter } from "../../svg/trinkets/3D-printing.svg"
import { ReactComponent as Bed } from "../../svg/trinkets/bed.svg"
import { ReactComponent as Coder } from "../../svg/trinkets/coder.svg"
import { ReactComponent as Camera } from "../../svg/trinkets/loaf-camera.svg"
import { ReactComponent as Campfire } from "../../svg/trinkets/loaf-campfire-1.svg"
import { ReactComponent as Cake } from "../../svg/trinkets/cake.svg"
import { ReactComponent as Coffee } from "../../svg/trinkets/loaf-coffee-3.svg"
import { ReactComponent as Devices } from "../../svg/trinkets/loaf-devices-4.svg"
import { ReactComponent as Cooking } from "../../svg/trinkets/cooking.svg"
import { ReactComponent as Pencil } from "../../svg/trinkets/pencil.svg"
import { ReactComponent as Game } from "../../svg/trinkets/game.svg"
import { ReactComponent as Koi } from "../../svg/trinkets/koi.svg"
import { ReactComponent as Tools } from "../../svg/trinkets/tools.svg"
import { ReactComponent as Home } from "../../svg/trinkets/home.svg"

const Zone = ({
  objective,
  zoneStart,
  zoneEnd,
  totalObjectiveTime,
  tag,
  trinket,
  region,
}) => {
  const zoneEndDate = new Date(parseInt(zoneEnd))
  const formattedZoneEnd = format(zoneEndDate, 'Pp')

  // const zoneStartDate = new Date(parseInt(zoneStart))
  // const formattedZoneStart = format(zoneStartDate, 'Pp')
  // console.log(zoneStart)

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
    Cake: Cake,
    Coffee: Coffee,
    Devices: Devices,
    Cooking: Cooking,
    Pencil: Pencil,
    Game: Game,
    Koi: Koi,
    Tools: Tools,
    Home: Home
  }

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  let SVG = svgMapper[trinket.name]

  return (
    <animated.div style={fadeIn}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          className={`${region.name
            .split(" ")
            .join("")} completed-zone-front p-shadow-3`}
        >
          <div className="zone-front-detail">
            <p>{region.name.toLowerCase()}</p>
            <p>{formattedZoneEnd}</p>
          </div>
        </div>

        <div onClick={handleClick} className="completed-zone-back p-shadow-3">
          <div className="zone-trinket-holder">
            <SVG className="zone-back-svg" />
          </div>
          <div className="zone-back-detail">
            <Card className="p-shadow-8" title="zone details">
              <p>
                <em>
                  <strong>objective:</strong>
                </em>{" "}
                {objective}
              </p>
              <p>
                <em>
                  <strong>total zone time:</strong>
                </em>{" "}
                {totalObjectiveTime} minutes
              </p>
              <p>
                <em>
                  <strong>tag:</strong>
                </em>{" "}
                {tag.name}
              </p>
              <p>
                <em>
                  <strong>region:</strong>
                </em>{" "}
                {region.name}
              </p>
              <p>
                <em>
                  <strong>trinket:</strong>
                </em>{" "}
                {trinket.name}
              </p>
              <p>
                <em>
                  <strong>zone start:</strong>
                </em>{" "}
                {zoneStart}
              </p>
              <p>
                <em>
                  <strong>zone end:</strong>
                </em>{" "}
                {formattedZoneEnd}
              </p>
            </Card>
            <button>flip</button>
          </div>
        </div>
      </ReactCardFlip>
    </animated.div>
  );
};

export default Zone