import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { purchaseRegion } from "../../redux/user"
import { Carousel } from "primereact/carousel"
import { Button } from "primereact/button"
import barcelona from "../../img/barcelona.jpg"
import blueLagoon from "../../img/bluelagoon.jpg"
import blueLakeTorii from "../../img/bluelaketorii.jpg"
import giza from "../../img/giza.jpg"
import iguazuFalls from "../../img/iguazufalls.jpg"
import lofotenIslands from "../../img/lofotenislands.jpg"
import machuPicchu from "../../img/machupicchu.jpg"
import nyc from "../../img/nyc.jpg"
import venice from "../../img/venice.jpg"

const RegionCarousel = () => {
  const [marketRegions, setMarketRegions] = useState([])

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

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.entities[0].id);

  const userTokens = useSelector((state) => state.user.entities[0].tokens);

  const regions = useSelector((state) => {
    return state.region.entities[0];
  });

  // GET USER REGIONS
  useEffect(() => {
    fetch(`http://localhost:3001/users/${userId}/regions`)
      .then((r) => r.json())
      .then((userRegionsArr) => {
        const filteredRegions = regions.filter(
          (region) =>
            !userRegionsArr.some((userRegion) => region.id === userRegion.id)
        )
        setMarketRegions(filteredRegions)
      })
  }, [regions, userId])

  // REGION PURCHASE

  const handleRegionPurchase = (region) => {
    if (userTokens >= region.price) {
      fetch(`http://localhost:3001/users/${userId}/regions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: region.id,
          name: region.name,
          image: region.image,
          price: region.price,
        }),
      })
        .then((r) => r.json())
        .then((regionData) => {
          const filteredRegions = marketRegions.filter(
            (region) => region.id !== regionData.region.id
          )
          setMarketRegions(filteredRegions)
          dispatch(purchaseRegion(regionData))
        })
    }
  }

  // REGION TEMPLATE
  const regionTemplate = (region) => {
    let image = imageMapper[region.name]

    return (
      <div className="region-item">
        <div className="region-item-content">
          <div>
            <img className="p-shadow-5" src={image} alt={region.name} />
            <h4>{region.name}</h4>
            <h6>${region.price}</h6>
            <Button onClick={(e) => handleRegionPurchase(region)}>Buy</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="region-carousel">
      <div className="card">
        <Carousel
          value={marketRegions}
          numVisible={1}
          numScroll={1}
          orientation="vertical"
          verticalViewPortHeight="352px"
          itemTemplate={regionTemplate}
          header={<h2 className="region-carousel-header">Regions</h2>}
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  )
}

export default RegionCarousel
