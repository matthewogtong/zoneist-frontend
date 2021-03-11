import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { leaveZone } from "../../redux/user"
import Timer from "./Timer"
import { Card } from "primereact/card"
import { format } from "date-fns"

const InTheZone = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const currentZone = useSelector(
    (state) => state.user.entities[0].zones.slice(-1)[0]
  )

  const regionBG = currentZone.region.name

  const objective = currentZone.objective
  const totalObjectiveTime = currentZone.totalObjectiveTime
  const tag = currentZone.tag
  const trinket = currentZone.trinket
  const region = currentZone.region
  const zoneStart = currentZone.zoneStart
  const zoneEnd = currentZone.zoneEnd
  const zoneEndDate = new Date(parseInt(zoneEnd))
  const formattedZoneEnd = format(zoneEndDate, "Pp")

  const handleClick = () => {
    dispatch(leaveZone())
    history.push("/home")
  }

  return (
    <div className={`${regionBG.split(" ").join("")} in-zone-div p-shadow-3`}>
      <Timer />
      <div className="in-zone-details">
        <Card className="in-zone-card p-shadow-8" title="zone details">
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
        <button onClick={(e) => handleClick()}>End Zone</button>
      </div>
    </div>
  )
}

export default InTheZone