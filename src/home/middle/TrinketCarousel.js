import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { purchaseTrinket } from "../../redux/user"
import { Carousel } from "primereact/carousel"
import { Button } from "primereact/button"
import { ReactComponent as LPrinter } from "../../svg/trinkets/3D-printing.svg"
import { ReactComponent as Bed } from "../../svg/trinkets/bed.svg"
import { ReactComponent as Coder } from "../../svg/trinkets/coder.svg"
import { ReactComponent as Camera } from "../../svg/trinkets/loaf-camera.svg"
import { ReactComponent as Campfire } from "../../svg/trinkets/loaf-campfire-1.svg"
import { ReactComponent as Cake } from "../../svg/trinkets/cake.svg"
import { ReactComponent as Coffee } from "../../svg/trinkets/loaf-coffee-3.svg"
import { ReactComponent as Devices } from "../../svg/trinkets/loaf-devices-4.svg"
import { ReactComponent as Cooking } from "../../svg/trinkets/cooking.svg"

const TrinketCarousel = () => {
    const [marketTrinkets, setMarketTrinkets] = useState([])

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
    }

    const dispatch = useDispatch()

    const userId = useSelector(state => state.user.entities[0].id)

    const userTokens = useSelector(state => state.user.entities[0].tokens)

    const trinkets = useSelector(state => {
      return (
        state.trinket.entities[0]
      )
    })

    const state = useSelector(state => state.user.entities[0])
    console.log(state)

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
    }, [trinkets, userId])

    // TRINKET PURCHASE

    const handleTrinketPurchase = (trinket) => {
        if (userTokens >= trinket.price) {
            fetch(`http://localhost:3001/users/${userId}/trinkets`, {
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
              .then((trinketData) => {
                const filteredTrinkets = marketTrinkets.filter(
                  (trinket) => trinket.id !== trinketData.trinket.id
                )
                setMarketTrinkets(filteredTrinkets)
                dispatch(purchaseTrinket(trinketData))
                console.log(trinketData)
              })
          }
    }
    // TRINKET TEMPLATE
    const trinketTemplate = (trinket) => {
        let SVG = svgMapper[trinket.name]
    
        return (
          <div className="trinket-item">
            <div className="trinket-item-content p-shadow-8">
              <div>
                <SVG />
                <h4>{trinket.name}</h4>
                <h6>${trinket.price}</h6>
                <Button className="button-bright" onClick={(e) => handleTrinketPurchase(trinket)}>Buy</Button>
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
          header={<h2 className="trinket-carousel-header">trinkets</h2>}
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  )
}

export default TrinketCarousel