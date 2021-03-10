import React from 'react'
import { useSpring, animated } from "react-spring"
import { useSelector } from "react-redux"
import { Carousel } from 'primereact/carousel'

// IMPORT REGIONS
import barcelona from "../../img/barcelona.jpg"
import blueLagoon from "../../img/bluelagoon.jpg"
import blueLakeTorii from "../../img/bluelaketorii.jpg"
import giza from "../../img/giza.jpg"
import iguazuFalls from "../../img/iguazufalls.jpg"
import lofotenIslands from "../../img/lofotenislands.jpg"
import machuPicchu from "../../img/machupicchu.jpg"
import nyc from "../../img/nyc.jpg"
import venice from "../../img/venice.jpg"

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

const Collection = () => {

    const userRegions = useSelector(state => state.user.entities[0].regions)
    const userTrinkets = useSelector(state => state.user.entities[0].trinkets)

    const fadeIn = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity: 0, marginTop: -1000 },
        delay: 0
      });

      const imageMapper = {
        Barcelona: barcelona,
        "Blue Lagoon": blueLagoon,
        "Blue Lake Torii": blueLakeTorii,
        Giza: giza,
        "Iguazu Falls": iguazuFalls,
        "Lofoten Islands": lofotenIslands,
        "Machu Picchu": machuPicchu,
        NYC: nyc,
        Venice: venice,
      }

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

    // COLLETION TEMPLATE
    const regionTemplate = (region) => {
        let image = imageMapper[region.name]

        return (
            <div className="region">
              <div className="region-content">
                <div>
                  <img className="p-shadow-5" src={image} alt={region.name} />
                  <h4>{region.name}</h4>
                </div>
              </div>
            </div>
          )
    }

    const trinketTemplate = (trinket) => {
        let SVG = svgMapper[trinket.name]

        return (
            <div className="trinket">
              <div className="trinket-content">
                <div>
                  <SVG />
                  <h4>{trinket.name}</h4>
                </div>
              </div>
            </div>
          )
    }

    return (
      <animated.div className="collection" style={fadeIn}>
        <div className="collection-region-carousel">
          <div className="card">
            <Carousel
              value={userRegions}
              numVisible={3}
              numScroll={3}
              itemTemplate={regionTemplate}
              header={<h2 className="collection-region-carousel-header">Regions</h2>}
              style={{ maxWidth: "1000px" }}
            />
          </div>
        </div>
        <div className="collection-trinket-carousel">
          <div className="card">
            <Carousel
              value={userTrinkets}
              numVisible={3}
              numScroll={3}
              itemTemplate={trinketTemplate}
              header={<h2 className="collection-trinket-carousel-header">Trinkets</h2>}
              style={{ maxWidth: "1000px" }}
            />
          </div>
        </div>
      </animated.div>
    );
}

export default Collection