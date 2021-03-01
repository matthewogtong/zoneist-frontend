import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Carousel } from "primereact/carousel"
import { Button } from "primereact/button"
import { ReactComponent as LPrinter } from "../../svg/trinkets/loaf-3D-printing.svg"
import { ReactComponent as Axe } from "../../svg/trinkets/loaf-axe.svg"
import { ReactComponent as Bath } from "../../svg/trinkets/loaf-bath.svg"
import { ReactComponent as Camera } from "../../svg/trinkets/loaf-camera.svg"
import { ReactComponent as Campfire } from "../../svg/trinkets/loaf-campfire-1.svg"
import { ReactComponent as Candle } from "../../svg/trinkets/loaf-candle-3.svg"
import { ReactComponent as Coffee } from "../../svg/trinkets/loaf-coffee-3.svg"
import { ReactComponent as Devices } from "../../svg/trinkets/loaf-devices-4.svg"
import { ReactComponent as Diamond } from "../../svg/trinkets/loaf-diamond-1.svg"
const TrinketCarousel = ({
  currentUser,
  currentTokens,
  setCurrentTokens,
  trinkets,
}) => {
    const [marketTrinkets, setMarketTrinkets] = useState([])

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

    const userId = useSelector(state => state.user.entities[0].id)

    // GET USER TRINKETS
    useEffect(() => {
      fetch(`http://localhost:3001/users/${userId}/trinkets`)
        .then((r) => r.json())
        .then((userTrinketsArr) => {
          const filteredTrinkets = trinkets.filter(
            (trinket) =>
              !userTrinketsArr.some((userTrinket) => trinket.id === userTrinket.id)
          )
          setMarketTrinkets(filteredTrinkets)
        })
    }, [])

    // TRINKET PURCHASE

    const handleTrinketPurchase = (trinket) => {
        if (currentTokens >= trinket.price) {
            fetch(`http://localhost:3001/users/${currentUser.id}/trinkets`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                id: trinket.id,
                name: trinket.name,
                price: trinket.price,
              }),
            })
              .then((r) => r.json())
              .then((boughtTrinket) => {
                const filteredTrinkets = marketTrinkets.filter(
                  (trinket) => trinket.id !== boughtTrinket.id
                )
                const updatedTokens = currentTokens - boughtTrinket.price
                setMarketTrinkets(filteredTrinkets)
                setCurrentTokens(updatedTokens)
              })
          }
    }
    // TRINKET TEMPLATE
    const trinketTemplate = (trinket) => {
        let SVG = svgMapper[trinket.name]
    
        return (
          <div className="trinket-item">
            <div className="trinket-item-content">
              <div>
                <SVG />
                <h4>{trinket.name}</h4>
                <h6>${trinket.price}</h6>
                <Button onClick={(e) => handleTrinketPurchase(trinket)}>Buy</Button>
              </div>
            </div>
          </div>
        )
      }

  return (
    <div className="trinket-carousel">
      <div className="card">
        <Carousel
          value={marketTrinkets}
          numVisible={1}
          numScroll={1}
          orientation="vertical"
          verticalViewPortHeight="352px"
          itemTemplate={trinketTemplate}
          header={<h2 className="trinket-carousel-header">Trinkets</h2>}
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  )
}

export default TrinketCarousel